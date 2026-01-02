import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Users, Heart, BookOpen, Target } from 'lucide-react';

export function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold mb-4">About Rhonde East SDA Church</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A vibrant Seventh-day Adventist community committed to spreading God's love and truth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1952, Rhonde East Seventh-day Adventist Church has been a beacon of faith 
                and hope in our community for over seven decades. What started as a small group of 
                believers meeting in a modest building has grown into a thriving congregation of 
                hundreds of members.
              </p>
              <p>
                Throughout our history, we have remained committed to our core mission: to share 
                the everlasting gospel of Jesus Christ and prepare people for His soon return. We 
                believe in the biblical Sabbath, health reform, and living according to God's Word.
              </p>
              <p>
                Today, we continue to serve our community through various ministries, outreach 
                programs, and worship services, always seeking to demonstrate Christ's love in 
                practical ways.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1729089049653-24312fdca908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBwcmF5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY3MjQ4NzczfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Church community"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                To make disciples of Jesus Christ who live as His loving witnesses and proclaim to 
                all people the everlasting gospel of the three angels' messages.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                To be a Christ-centered community where every person experiences God's transforming 
                love and grace, and is equipped to share it with others.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Biblical truth, spiritual growth, authentic community, compassionate service, and 
                faithful stewardship guide everything we do.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                A diverse, welcoming family of believers from all walks of life, united in our love 
                for Christ and commitment to serving one another.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-lg p-8">
          <h2 className="text-3xl font-heading font-bold mb-6 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4"></div>
              <h3 className="font-heading font-semibold mb-1">Pastor John Smith</h3>
              <p className="text-sm text-muted-foreground mb-2">Senior Pastor</p>
              <p className="text-sm text-muted-foreground">
                Serving since 2015, passionate about discipleship and community outreach
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4"></div>
              <h3 className="font-heading font-semibold mb-1">Elder Sarah Johnson</h3>
              <p className="text-sm text-muted-foreground mb-2">Church Elder</p>
              <p className="text-sm text-muted-foreground">
                Leading women's ministry and Sabbath school programs
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4"></div>
              <h3 className="font-heading font-semibold mb-1">Deacon Michael Brown</h3>
              <p className="text-sm text-muted-foreground mb-2">Head Deacon</p>
              <p className="text-sm text-muted-foreground">
                Coordinating community service and outreach initiatives
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
