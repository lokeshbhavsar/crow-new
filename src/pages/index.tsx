import Partner from '@/components/modules/index/Partner';
import Hero from '../components/modules/index/Hero';
import About from '@/components/modules/Home-2/About';
import Abouts from '@/components/modules/about-us/About';
import Faq from '@/components/modules/index/Faq';
import Newsletter from '@/components/modules/index/Newsletter';
import Blog from '@/components/modules/index/Blogs';
import Services from '@/components/modules/index/Services';
import GetStarted from '@/components/modules/index/GetStarted';
import GettingStart from '@/components/modules/index/GettingStart';
import Roadmap from '@/components/modules/Home-2/Roadmap';
import Discover from '@/components/modules/index/Discover';
import Community from '@/components/modules/index/Community';
import EcosystemPartner from '@/components/modules/index/EcosystemPartner';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Partner /> */}
      <GettingStart />

      <Abouts />
      {/* <Discover /> */}
      <EcosystemPartner />
      <About />
      <Roadmap />
      <Community />
      {/* <Faq /> */}
      {/* <GetStarted /> */}
   
    
    
      {/* <Services /> */}
      
      {/* <Blog /> */}
      {/* <Newsletter /> */}
    </>
  );
}
