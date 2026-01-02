import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

interface User {
  id: string;
  email: string;
  name?: string;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (session?.access_token) {
        setAccessToken(session.access_token);
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          name: session.user.user_metadata?.name,
        });
        
        // Fetch user profile from server
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-974147f8/members/profile`,
          {
            headers: {
              'Authorization': `Bearer ${session.access_token}`,
            },
          }
        );
        if (response.ok) {
          const { profile } = await response.json();
          setUser(prev => ({ ...prev!, ...profile }));
        }
      }
    } catch (error) {
      console.error('Session check error:', error);
    } finally {
      setLoading(false);
    }
  }

  async function signIn(email: string, password: string) {
    const { data: { session }, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    if (session) {
      setAccessToken(session.access_token);
      setUser({
        id: session.user.id,
        email: session.user.email || '',
        name: session.user.user_metadata?.name,
      });
      
      // Fetch full profile
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-974147f8/members/profile`,
        {
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
          },
        }
      );
      if (response.ok) {
        const { profile } = await response.json();
        setUser(prev => ({ ...prev!, ...profile }));
      }
    }
  }

  async function signUp(email: string, password: string, name: string) {
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-974147f8/auth/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({ email, password, name }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Signup failed');
    }

    // Sign in after signup
    await signIn(email, password);
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
    setAccessToken(null);
  }

  return (
    <AuthContext.Provider value={{ user, accessToken, signIn, signUp, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}