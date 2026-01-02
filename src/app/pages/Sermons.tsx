import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Play, Search, Calendar, User } from 'lucide-react';

export function Sermons() {
  const [searchTerm, setSearchTerm] = useState('');

  const sermons = [
    { id: 1, title: 'Finding Peace in Troubled Times', speaker: 'Pastor John Smith', date: '2025-12-28', scripture: 'Philippians 4:6-7', videoUrl: '#' },
    { id: 2, title: 'The Promise of His Coming', speaker: 'Pastor John Smith', date: '2025-12-21', scripture: 'Revelation 22:12', videoUrl: '#' },
    { id: 3, title: 'Living by Faith', speaker: 'Elder Sarah Johnson', date: '2025-12-14', scripture: 'Hebrews 11', videoUrl: '#' },
    { id: 4, title: 'The Sabbath Rest', speaker: 'Pastor John Smith', date: '2025-12-07', scripture: 'Exodus 20:8-11', videoUrl: '#' },
  ];

  const filteredSermons = sermons.filter(sermon =>
    sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">Sermons & Media</h1>
          <p className="text-xl text-muted-foreground">
            Watch and listen to past sermons and messages
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search sermons..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSermons.map((sermon) => (
            <Card key={sermon.id}>
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Play className="h-16 w-16 text-muted-foreground" />
              </div>
              <CardHeader>
                <CardTitle>{sermon.title}</CardTitle>
                <CardDescription className="space-y-2">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {sermon.speaker}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(sermon.date).toLocaleDateString()}
                  </div>
                  <div>Scripture: {sermon.scripture}</div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Sermon
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
