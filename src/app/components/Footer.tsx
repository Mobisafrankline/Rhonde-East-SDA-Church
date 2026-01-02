import { Link } from 'react-router-dom';
import { Church, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Church className="h-6 w-6 text-primary" />
              <span className="font-heading font-semibold">Rhonde East SDA Church</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A welcoming Seventh-day Adventist community dedicated to worship, service, and fellowship.
            </p>
          </div>

          <div>
            <h3 className="font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/beliefs" className="hover:text-primary transition-colors">Our Beliefs</Link></li>
              <li><Link to="/ministries" className="hover:text-primary transition-colors">Ministries</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/giving" className="hover:text-primary transition-colors">Give</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4">Service Times</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="font-medium">Sabbath School:</span> Saturday 9:30 AM</li>
              <li><span className="font-medium">Divine Service:</span> Saturday 11:00 AM</li>
              <li><span className="font-medium">Prayer Meeting:</span> Wednesday 6:30 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>20100 Nakuru, Rhonde East</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(254) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@rhondeastsda.org</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Rhonde East Seventh-day Adventist Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
