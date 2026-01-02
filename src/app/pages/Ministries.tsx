import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Users, Heart, Music, Sprout, Baby, BookOpen, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Ministries() {
  const ministries = [
    {
      name: "Men's Ministry",
      description: "Equipping men to be spiritual leaders in their homes and communities through fellowship, study, and service.",
      leader: "Elder David Thompson",
      contact: "mens@rhondeastsda.org",
      icon: Users,
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400"
    },
    {
      name: "Women's Ministry",
      description: "Empowering women to grow in faith, build meaningful relationships, and serve with purpose.",
      leader: "Sister Mary Williams",
      contact: "womens@rhondeastsda.org",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1729089049653-24312fdca908?w=400"
    },
    {
      name: "Youth Ministry",
      description: "Engaging young people in dynamic worship, biblical teaching, and service opportunities.",
      leader: "Pastor James Rodriguez",
      contact: "youth@rhondeastsda.org",
      icon: Sprout,
      image: "https://images.unsplash.com/photo-1562025128-ca91c8c29ffc?w=400"
    },
    {
      name: "Pathfinder Club",
      description: "A Christ-centered club for young people ages 10-15, focusing on character development, outdoor skills, and community service.",
      leader: "Director Sarah Chen",
      contact: "pathfinders@rhondeastsda.org",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1762013728402-69cff78f29fd?w=400"
    },
    {
      name: "Children's Ministry",
      description: "Creating a safe, fun environment where children can learn about Jesus through age-appropriate lessons and activities.",
      leader: "Teacher Emily Jackson",
      contact: "children@rhondeastsda.org",
      icon: Baby,
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400"
    },
    {
      name: "Music Ministry",
      description: "Leading the congregation in worship through choir, praise teams, and instrumental music.",
      leader: "Director Michael Anderson",
      contact: "music@rhondeastsda.org",
      icon: Music,
      image: "https://images.unsplash.com/photo-1562025128-ca91c8c29ffc?w=400"
    },
    {
      name: "Community Outreach",
      description: "Serving our neighbors through food distribution, health programs, and practical assistance.",
      leader: "Coordinator Lisa Martinez",
      contact: "outreach@rhondeastsda.org",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1762013728402-69cff78f29fd?w=400"
    },
    {
      name: "Bible Study Groups",
      description: "Small group Bible studies meeting throughout the week for deeper fellowship and spiritual growth.",
      leader: "Coordinator Pastor John Smith",
      contact: "biblestudy@rhondeastsda.org",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400"
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">Our Ministries</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover ways to serve, grow, and connect through our various ministry opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src={ministry.image}
                  alt={ministry.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ministry.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{ministry.name}</CardTitle>
                </div>
                <CardDescription>{ministry.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm"><span className="font-medium">Leader:</span> {ministry.leader}</p>
                <p className="text-sm"><span className="font-medium">Contact:</span> {ministry.contact}</p>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/members">Join This Ministry</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-heading font-bold mb-4">Get Involved</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Interested in joining a ministry or learning more about serving opportunities? We'd love to help you find the perfect fit!
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/members">Sign Up</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
