import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Clock, Calendar } from 'lucide-react';

export function LiveWorship() {
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">Live Worship</h1>
          <p className="text-xl text-muted-foreground">
            Join us for live worship services every Sabbath
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-0">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <Clock className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-2">Next Live Service</h3>
                <p className="text-muted-foreground">Saturday at 11:00 AM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Sabbath School
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Every Saturday at 9:30 AM</p>
              <p className="text-sm">Join us for Bible study and fellowship</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Divine Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Every Saturday at 11:00 AM</p>
              <p className="text-sm">Main worship service with sermon</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center p-6 bg-muted rounded-lg">
          <p className="text-muted-foreground">
            In a production environment, this page would embed a live streaming player (YouTube, Vimeo, or custom streaming solution) with countdown timer and chat features.
          </p>
        </div>
      </div>
    </div>
  );
}
