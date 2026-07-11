import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Moments from './components/Moments';
import Process from './components/Process';
// import Engagements from './components/Engagements';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-green/20">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Moments />
        <Process />
        {/* <Engagements /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
