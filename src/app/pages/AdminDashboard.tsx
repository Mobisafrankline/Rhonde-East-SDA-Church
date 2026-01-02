import { useAuth } from '../context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Users, Calendar, DollarSign, FileText, BarChart3 } from 'lucide-react';
import { Navigate } from 'react-router-dom';

export function AdminDashboard() {
  const { user } = useAuth();

  if (!user || user.role !== 'admin') {
    return <Navigate to="/members" />;
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-bold mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">234</div>
              <p className="text-xs text-muted-foreground">+12 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Donations</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,450</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Ministries</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">All active</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="events" className="space-y-4">
          <TabsList>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="sermons">Sermons</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Manage Events</CardTitle>
                  <Button>Add Event</Button>
                </div>
                <CardDescription>Create and manage church events</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Event management interface would appear here with full CRUD operations.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sermons" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Manage Sermons</CardTitle>
                  <Button>Add Sermon</Button>
                </div>
                <CardDescription>Upload and manage sermon recordings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Sermon management interface with video upload capabilities would appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="announcements" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Manage Announcements</CardTitle>
                  <Button>Add Announcement</Button>
                </div>
                <CardDescription>Post church announcements and news</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Announcement editor would appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage member accounts and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">User list with role management would appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="donations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Donation Reports</CardTitle>
                <CardDescription>View and manage donation records</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Donation analytics and reports would appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
