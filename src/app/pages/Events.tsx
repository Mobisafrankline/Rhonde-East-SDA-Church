import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import { Calendar } from '../components/ui/calendar';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

export function Events() {
  const [events, setEvents] = useState<any[]>([]);
  const [date, setDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-974147f8/events`,
        {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` },
        }
      );
      const data = await response.json();
      setEvents(data.events || []);
    } catch (error) {
      console.error('Failed to fetch events:', error);
    }
  }

  // Sample events for demonstration
  const sampleEvents = events.length > 0 ? events : [
    { id: '1', title: 'Sabbath School', date: '2026-01-03', time: '9:30 AM', location: 'Main Sanctuary', description: 'Weekly Bible study and fellowship' },
    { id: '2', title: 'Divine Worship Service', date: '2026-01-03', time: '11:00 AM', location: 'Main Sanctuary', description: 'Weekly worship service' },
    { id: '3', title: 'Prayer Meeting', date: '2026-01-07', time: '6:30 PM', location: 'Fellowship Hall', description: 'Midweek prayer and devotion' },
    { id: '4', title: 'Youth Group', date: '2026-01-10', time: '7:00 PM', location: 'Youth Center', description: 'Youth fellowship and activities' },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">Events & Calendar</h1>
          <p className="text-xl text-muted-foreground">
            Stay connected with upcoming church events and activities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-heading font-bold">Upcoming Events</h2>
            {sampleEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button>RSVP</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Event Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}