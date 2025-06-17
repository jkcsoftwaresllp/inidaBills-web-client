import React from 'react';
import Header from '../components/home/Header';
import TilesContainer from '../components/containerTestimonials/TilesContainer';
import Tile from '../components/containerTestimonials/Tile';
import USPTile from '../components/containerTestimonials/USPTile';
import Testimonials from '../components/containerTestimonials/Testimonials';
import TrustedCompaniesSection from '../components/home/TrustedCompaniesSection';
import UserDetails from '../components/home/UserDetails';
import FeatureTile from '../components/containerTestimonials/FeatureTile';
import DemoPopup from '../components/demoPopup/DemoPopup';
import BankGradeSecurity from '../assets/BankGradeSecurity.png';
import IndianBusiness from '../assets/IndianBusiness.png';
import LightningFast from '../assets/LightningFast.png';
import Support from '../assets/Support.png';
import { AlertTriangle, Warehouse, Zap } from 'lucide-react';

function Home() {
  return (
    <div>
      <DemoPopup />
      <Header />
      
      <TilesContainer
        tittle={'Why IndiaBills?'}
        description={
          "We're more than just a billing software. Here's what sets us apart."
        }
        background={0}
      >
        {/* <Tile
          tittle="Made for Indian Businesses"
          para="Designed specifically with Indian tax laws, business practices, and requirements in mind."
        />
        <Tile
          tittle="Bank-Grade Security"
          para="Your data is protected with enterprise-level encryption and regular security audits."
        />
        <Tile
          tittle="Lightning Fast"
          para="Optimized for speed, even with large datasets and multiple users."
        />
        <Tile
          tittle="24/7 Support"
          para="Our dedicated support team is always available to help you with any issues."
        /> */}
      </TilesContainer>

      <FeatureTile
        title="Made for Indian Businesses"
        para="Designed specifically with Indian tax laws, business practices, and requirements in mind."
        graphic={<img src={IndianBusiness} alt="Business" width="200" />}
        graphicPosition="right"
      />
      <FeatureTile
        title="Bank-Grade Security"
        para="Your data is protected with enterprise-level encryption and regular security audits."
        graphic={<img src={BankGradeSecurity} alt="Security" width="200" />}
        graphicPosition="left"
      />
      <FeatureTile
        title="Lightning Fast"
        para="Optimized for speed, even with large datasets and multiple users."
        graphic={<img src={LightningFast} alt="Fast" width="200" />}
        graphicPosition="right"
      />
      <FeatureTile
        title="24/7 Support"
        para="Our dedicated support team is always available to help you with any issues."
        graphic={<img src={Support} alt="Support" width="200" />}
        graphicPosition="left"
      />

      <TilesContainer
        tittle={'What Makes Us Different'}
        description={
          "Discover the unique features that set IndiaBills apart from other billing solutions. Our innovative approach addresses the specific challenges faced by modern Indian businesses."
        }
        background={1}
      >
        <USPTile
          icon={<AlertTriangle size={40} color="#e63946" />}
          title="Smart Expiry Alert System"
          description="Never lose money on expired inventory again. Our intelligent alert system monitors product expiry dates and sends timely notifications to help you take action before it's too late."
          benefits={[
            "Real-time expiry tracking for all products",
            "Customizable alert timelines (7, 15, 30 days)",
            "Automated email and SMS notifications",
            "Batch-wise expiry management",
            "Loss prevention analytics"
          ]}
          color="primary"
        />
        
        <USPTile
          icon={<Warehouse size={40} color="#e63946" />}
          title="Virtual Godown Technology"
          description="Revolutionize your inventory management with our virtual warehouse system. Organize, track, and manage your stock across multiple virtual locations without physical constraints."
          benefits={[
            "Unlimited virtual warehouse creation",
            "Location-based inventory segregation",
            "Cross-warehouse stock transfers",
            "Zone-wise stock allocation",
            "Digital warehouse mapping"
          ]}
          color="secondary"
        />
        
        <USPTile
          icon={<Zap size={40} color="#e63946" />}
          title="Quick Commerce Ready"
          description="Built for the fast-paced world of quick commerce. Handle rapid order processing, instant inventory updates, and real-time delivery tracking with ease."
          benefits={[
            "Sub-minute order processing",
            "Real-time inventory sync",
            "Instant delivery tracking",
            "Quick payment reconciliation",
            "Automated stock replenishment alerts"
          ]}
          color="success"
        />
      </TilesContainer>

      <TilesContainer
        tittle={'What Our Clients Say'}
        description={
          "Don't just take our word for it. Here's what businesses like yours have to say."
        }
        background={0}
      >
        <Testimonials
          username={'Rajesh Kumar'}
          bio={'Retail Store Owner, Delhi'}
          review={
            'IndiaBills has transformed how we manage our invoicing. The GST compliance features alone have saved us countless hours of work each month.'
          }
          iconText={'RK'}
          stars={'★★★'}
        />
        <Testimonials
          username={'Sunita Patel'}
          bio={'Wholesale Distributor, Mumbai'}
          review={
            'The inventory management system is a game-changer. We can now track our stock across multiple locations in real-time, which has reduced our stockouts by 70%.'
          }
          iconText={'SP'}
          stars={'★★★★★'}
        />
        <Testimonials
          username={'Anand Reddy'}
          bio={'Restaurant Owner, Bangalore'}
          review={
            "Customer support is exceptional. Whenever we've had questions, the team has been quick to respond and incredibly helpful. The mobile app is also a huge plus."
          }
          iconText={'AR'}
          stars={'★★★★'}
        />
      </TilesContainer>
      
      {/* <TrustedCompaniesSection /> */}
      <UserDetails />
    </div>
  );
}

export default Home;