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
                Founded in 1952 under the mother church, Rhonde Central Seventh-day Adventist Church, 
                Rhonde East Seventh-day Adventist Church has been a steadfast beacon of faith, hope, 
                and service in the community for over seven decades. What began as a small gathering of
                 devoted believers worshiping in a modest setting has grown into a vibrant and thriving 
                 congregation of hundreds of members.
              </p>
              <p>
                Throughout our journey, we have remained firmly committed to our core mission—to proclaim 
                the everlasting gospel of Jesus Christ and to prepare people for His soon return. We uphold 
                the biblical Sabbath, promote healthful living, and strive to live in obedience to God’s Word.
              </p>
              <p>
                As the church matured, Rhonde East SDA Church was privileged to become a mother church to Rhonde 
                South Seventh-day Adventist Church, continuing the legacy of evangelism, church planting, and spiritual growth.
                 This expansion reflects our dedication to spreading the gospel and nurturing new faith communities.
              </p>
              <p>
                Today, Rhonde East Seventh-day Adventist Church continues to impact lives through diverse ministries, 
                outreach programs, and uplifting worship services, consistently seeking to reflect Christ’s love through
                 practical service to our community.
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
              <p className="text-sm text-muted-foreground mb-2">Pastor</p>
              <p className="text-sm text-muted-foreground">
                Serving since 2015, passionate about discipleship and community outreach
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4"></div>
              <h3 className="font-heading font-semibold mb-1">Elder Anyona</h3>
              <p className="text-sm text-muted-foreground mb-2">Church Elder</p>
              <p className="text-sm text-muted-foreground">
                Leading men's ministry and Sabbath school programs
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4"></div>
              <h3 className="font-heading font-semibold mb-1">Deacon Obara Mobisa</h3>
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
