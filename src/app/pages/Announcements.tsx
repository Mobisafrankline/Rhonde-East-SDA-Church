import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Calendar, Tag } from 'lucide-react';

export function Announcements() {
  const announcements = [
    {
      id: 1,
      title: 'New Year Prayer Service',
      date: '2026-01-01',
      category: 'Event',
      content: 'Join us for a special prayer service as we welcome the new year. Service begins at 7:00 PM in the main sanctuary.',
    },
    {
      id: 2,
      title: 'Pathfinder Club Registration Open',
      date: '2025-12-28',
      category: 'Ministry',
      content: 'Registration is now open for the Pathfinder Club. Ages 10-15 welcome. Contact Director Sarah Chen for more information.',
    },
    {
      id: 3,
      title: 'Community Food Drive',
      date: '2025-12-25',
      category: 'Outreach',
      content: 'We are collecting non-perishable food items for local families in need. Drop-off donations at the church office.',
    },
    {
      id: 4,
      title: 'Bible Study Groups Starting',
      date: '2025-12-20',
      category: 'Spiritual Growth',
      content: 'New small group Bible studies are forming. Sign up in the fellowship hall or contact the church office.',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">Announcements & News</h1>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest church news and announcements
          </p>
        </div>

        <div className="space-y-6">
          {announcements.map((announcement) => (
            <Card key={announcement.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="mb-2">{announcement.title}</CardTitle>
                    <CardDescription className="flex flex-wrap gap-4">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(announcement.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        {announcement.category}
                      </span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{announcement.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
