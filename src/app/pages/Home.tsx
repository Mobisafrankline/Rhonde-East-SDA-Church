import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Calendar, Play, Heart, BookOpen, Users, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Home() {
  const upcomingEvents = [
    { title: 'Sabbath School', date: 'Saturday, 9:30 AM', location: 'Main Sanctuary' },
    { title: 'Divine Worship Service', date: 'Saturday, 11:00 AM', location: 'Main Sanctuary' },
    { title: 'Prayer Meeting', date: 'Wednesday, 6:30 PM', location: 'Main Sanctuary' },
  ];

  const ministries = [
    { title: 'Youth Ministry', description: 'Engaging youth in faith and service', icon: Users },
    { title: 'Community Outreach', description: 'Serving our local community', icon: Heart },
    { title: 'Bible Study', description: 'Weekly Bible study groups', icon: BookOpen },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1562025128-ca91c8c29ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBzYW5jdHVhcnklMjB3b3JzaGlwfGVufDF8fHx8MTc2NzI0ODc3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Church sanctuary"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Welcome to Rhonde East SDA Church
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-muted-foreground">
              "Remember the Sabbath day, to keep it holy."
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              - Exodus 20:8
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/live">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Live
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/giving">
                  <Heart className="mr-2 h-5 w-5" />
                  Give Online
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Join Us for Worship</h2>
            <p className="text-lg text-muted-foreground">
              We welcome you to worship with us every Sabbath
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-1">{event.date}</p>
                    <p className="text-sm text-muted-foreground">{event.location}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Sermon */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">Latest Sermon</h2>
              <h3 className="text-2xl font-serif mb-4">Finding Peace in Troubled Times</h3>
              <p className="text-muted-foreground mb-6">
                Pastor John Smith shares insights on maintaining faith and peace during life's
                challenges, drawing from Philippians 4:6-7.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link to="/sermons">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Sermon
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/sermons">View All Sermons</Link>
                </Button>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzY3MTM0MTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bible study"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Ministries</h2>
            <p className="text-lg text-muted-foreground">
              Get involved in our various ministry programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ministries.map((ministry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <ministry.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{ministry.title}</CardTitle>
                    <CardDescription>{ministry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild>
                      <Link to="/ministries">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link to="/ministries">View All Ministries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Scripture Highlight */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <BookOpen className="h-12 w-12 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-serif mb-4">
            "For God so loved the world that he gave his one and only Son, that whoever believes
            in him shall not perish but have eternal life."
          </blockquote>
          <cite className="text-lg">- John 3:16 (NIV)</cite>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're visiting for the first time or looking for a church home, we'd love to
            connect with you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <Link to="/members">
                <Users className="mr-2 h-5 w-5" />
                Become a Member
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/events">
                <Calendar className="mr-2 h-5 w-5" />
                View Events
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
