/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Cycle from './components/Cycle';
import WhyMGM from './components/WhyMGM';
import WhoIsThisFor from './components/WhoIsThisFor';
import HowItWorks from './components/HowItWorks';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div className="bg-black-900 min-h-screen text-white selection:bg-gold-500/30 selection:text-gold-300">
      <ScrollProgress />
      <Header />
      
      <main>
        <Hero />
        <Problem />
        <Cycle />
        <WhyMGM />
        <WhoIsThisFor />
        <HowItWorks />
        <LeadForm />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
