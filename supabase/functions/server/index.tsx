import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "npm:@supabase/supabase-js@2";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-974147f8/health", (c) => {
  return c.json({ status: "ok" });
});

// AUTH ROUTES
app.post("/make-server-974147f8/auth/signup", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, name } = body;

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') || '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',
    );

    // Create user with Supabase Auth
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      // Automatically confirm the user's email since an email server hasn't been configured
      email_confirm: true
    });

    if (error) {
      console.error('Signup error:', error);
      return c.json({ error: error.message }, 400);
    }

    // Store user profile in KV store
    await kv.set(`user:${data.user.id}`, {
      id: data.user.id,
      email,
      name,
      role: 'member',
      createdAt: new Date().toISOString(),
    });

    return c.json({ user: data.user });
  } catch (error) {
    console.error('Signup error:', error);
    return c.json({ error: 'Signup failed' }, 500);
  }
});

// EVENTS ROUTES
app.get("/make-server-974147f8/events", async (c) => {
  try {
    const events = await kv.getByPrefix('event:');
    return c.json({ events: events || [] });
  } catch (error) {
    console.error('Get events error:', error);
    return c.json({ error: 'Failed to fetch events' }, 500);
  }
});

app.post("/make-server-974147f8/events", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') || '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (!user?.id) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    // Check if user is admin
    const userData = await kv.get(`user:${user.id}`);
    if (!userData || userData.role !== 'admin') {
      return c.json({ error: 'Forbidden: Admin access required' }, 403);
    }

    const body = await c.req.json();
    const eventId = `event:${Date.now()}`;
    
    await kv.set(eventId, {
      ...body,
      id: eventId,
      createdAt: new Date().toISOString(),
    });

    return c.json({ success: true, id: eventId });
  } catch (error) {
    console.error('Create event error:', error);
    return c.json({ error: 'Failed to create event' }, 500);
  }
});

// SERMONS ROUTES
app.get("/make-server-974147f8/sermons", async (c) => {
  try {
    const sermons = await kv.getByPrefix('sermon:');
    return c.json({ sermons: sermons || [] });
  } catch (error) {
    console.error('Get sermons error:', error);
    return c.json({ error: 'Failed to fetch sermons' }, 500);
  }
});

app.post("/make-server-974147f8/sermons", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') || '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (!user?.id) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    // Check if user is admin
    const userData = await kv.get(`user:${user.id}`);
    if (!userData || userData.role !== 'admin') {
      return c.json({ error: 'Forbidden: Admin access required' }, 403);
    }

    const body = await c.req.json();
    const sermonId = `sermon:${Date.now()}`;
    
    await kv.set(sermonId, {
      ...body,
      id: sermonId,
      createdAt: new Date().toISOString(),
    });

    return c.json({ success: true, id: sermonId });
  } catch (error) {
    console.error('Create sermon error:', error);
    return c.json({ error: 'Failed to create sermon' }, 500);
  }
});

// ANNOUNCEMENTS ROUTES
app.get("/make-server-974147f8/announcements", async (c) => {
  try {
    const announcements = await kv.getByPrefix('announcement:');
    return c.json({ announcements: announcements || [] });
  } catch (error) {
    console.error('Get announcements error:', error);
    return c.json({ error: 'Failed to fetch announcements' }, 500);
  }
});

app.post("/make-server-974147f8/announcements", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') || '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (!user?.id) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const userData = await kv.get(`user:${user.id}`);
    if (!userData || userData.role !== 'admin') {
      return c.json({ error: 'Forbidden: Admin access required' }, 403);
    }

    const body = await c.req.json();
    const announcementId = `announcement:${Date.now()}`;
    
    await kv.set(announcementId, {
      ...body,
      id: announcementId,
      createdAt: new Date().toISOString(),
    });

    return c.json({ success: true, id: announcementId });
  } catch (error) {
    console.error('Create announcement error:', error);
    return c.json({ error: 'Failed to create announcement' }, 500);
  }
});

// DONATIONS ROUTES
app.post("/make-server-974147f8/donations", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') || '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (!user?.id) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const body = await c.req.json();
    const donationId = `donation:${Date.now()}`;
    
    await kv.set(donationId, {
      ...body,
      userId: user.id,
      id: donationId,
      status: 'pending',
      createdAt: new Date().toISOString(),
    });

    // In a real app, this would integrate with payment processors
    return c.json({ success: true, id: donationId, status: 'pending' });
  } catch (error) {
    console.error('Create donation error:', error);
    return c.json({ error: 'Failed to process donation' }, 500);
  }
});

app.get("/make-server-974147f8/donations", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') || '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (!user?.id) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const userData = await kv.get(`user:${user.id}`);
    if (!userData || userData.role !== 'admin') {
      return c.json({ error: 'Forbidden: Admin access required' }, 403);
    }

    const donations = await kv.getByPrefix('donation:');
    return c.json({ donations: donations || [] });
  } catch (error) {
    console.error('Get donations error:', error);
    return c.json({ error: 'Failed to fetch donations' }, 500);
  }
});

// MEMBER PROFILE ROUTES
app.get("/make-server-974147f8/members/profile", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') || '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (!user?.id) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const profile = await kv.get(`user:${user.id}`);
    return c.json({ profile: profile || {} });
  } catch (error) {
    console.error('Get profile error:', error);
    return c.json({ error: 'Failed to fetch profile' }, 500);
  }
});

app.put("/make-server-974147f8/members/profile", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') || '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (!user?.id) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const body = await c.req.json();
    const existingProfile = await kv.get(`user:${user.id}`);
    
    await kv.set(`user:${user.id}`, {
      ...existingProfile,
      ...body,
      id: user.id,
      updatedAt: new Date().toISOString(),
    });

    return c.json({ success: true });
  } catch (error) {
    console.error('Update profile error:', error);
    return c.json({ error: 'Failed to update profile' }, 500);
  }
});

// MINISTRY ENROLLMENT
app.post("/make-server-974147f8/members/enroll", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') || '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (!user?.id) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const body = await c.req.json();
    const enrollmentId = `enrollment:${user.id}:${Date.now()}`;
    
    await kv.set(enrollmentId, {
      userId: user.id,
      ministry: body.ministry,
      id: enrollmentId,
      status: 'pending',
      createdAt: new Date().toISOString(),
    });

    return c.json({ success: true, id: enrollmentId });
  } catch (error) {
    console.error('Ministry enrollment error:', error);
    return c.json({ error: 'Failed to enroll in ministry' }, 500);
  }
});

Deno.serve(app.fetch);