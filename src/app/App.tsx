import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from './components/ui/sonner';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

// Lazy load other pages for better performance
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Beliefs = lazy(() => import('./pages/Beliefs').then(m => ({ default: m.Beliefs })));
const Ministries = lazy(() => import('./pages/Ministries').then(m => ({ default: m.Ministries })));
const Sermons = lazy(() => import('./pages/Sermons').then(m => ({ default: m.Sermons })));
const Events = lazy(() => import('./pages/Events').then(m => ({ default: m.Events })));
const LiveWorship = lazy(() => import('./pages/LiveWorship').then(m => ({ default: m.LiveWorship })));
const Giving = lazy(() => import('./pages/Giving').then(m => ({ default: m.Giving })));
const Announcements = lazy(() => import('./pages/Announcements').then(m => ({ default: m.Announcements })));
const Members = lazy(() => import('./pages/Members').then(m => ({ default: m.Members })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard').then(m => ({ default: m.AdminDashboard })));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
        <p className="mt-4 text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/beliefs" element={<Beliefs />} />
                  <Route path="/ministries" element={<Ministries />} />
                  <Route path="/sermons" element={<Sermons />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/live" element={<LiveWorship />} />
                  <Route path="/giving" element={<Giving />} />
                  <Route path="/announcements" element={<Announcements />} />
                  <Route path="/members" element={<Members />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
          <Toaster />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
