import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { toast } from 'sonner';
import { LogOut, User, Heart } from 'lucide-react';

export function Members() {
  const { user, signIn, signUp, signOut, loading } = useAuth();
  const [signinForm, setSigninForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ email: '', password: '', name: '' });

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(signinForm.email, signinForm.password);
      toast.success('Welcome back!');
    } catch (error: any) {
      toast.error(error.message || 'Sign in failed');
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(signupForm.email, signupForm.password, signupForm.name);
      toast.success('Account created successfully!');
    } catch (error: any) {
      toast.error(error.message || 'Sign up failed');
    }
  };

  const handleSignOut = async () => {
    await signOut();
    toast.success('Signed out successfully');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-heading font-bold">Member Portal</h1>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{user.name || 'Not set'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Role</p>
                  <p className="font-medium capitalize">{user.role || 'Member'}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="mr-2 h-4 w-4" />
                  Join a Ministry
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  View My Donations
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  RSVP to Events
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Ministry Enrollment</CardTitle>
              <CardDescription>Select ministries you'd like to join</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Contact your ministry leader to enroll in any of our programs. Visit the Ministries page to learn more.
              </p>
            </CardContent>
          </Card>

          {user.role === 'admin' && (
            <Card className="mt-6 border-accent">
              <CardHeader>
                <CardTitle>Admin Access</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <a href="/admin">Go to Admin Dashboard</a>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold mb-4">Members Portal</h1>
          <p className="text-muted-foreground">Sign in to access your member account</p>
        </div>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <Card>
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Welcome back! Please sign in to continue</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div>
                    <Label htmlFor="signin-email">Email</Label>
                    <Input
                      id="signin-email"
                      type="email"
                      value={signinForm.email}
                      onChange={(e) => setSigninForm({ ...signinForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="signin-password">Password</Label>
                    <Input
                      id="signin-password"
                      type="password"
                      value={signinForm.password}
                      onChange={(e) => setSigninForm({ ...signinForm, password: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Sign In</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Join our church community</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div>
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      value={signupForm.name}
                      onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      value={signupForm.email}
                      onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      value={signupForm.password}
                      onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Create Account</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
