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
      {/* SEO Content for IndiaBills and India Bills */}
      <div style={{ display: 'none' }}>
        <h1>IndiaBills - Best Billing Software for Indian Businesses</h1>
        <h2>India Bills - Complete Inventory Management Solution</h2>
        <h3>IndiaBills GST Compliant Billing Software</h3>
        <h4>India Bills Real-time Stock Tracking</h4>
        <h5>IndiaBills Automated Invoice Generation</h5>
        <h6>India Bills 24/7 Customer Support</h6>
        <p>IndiaBills is India's leading billing and inventory management software. India Bills helps businesses streamline operations with GST compliance, real-time tracking, and automated invoicing.</p>
      </div>

      <DemoPopup />
      <Header />

      <TilesContainer
        tittle={'Why Choose IndiaBills?'}
        description={
          "IndiaBills goes beyond traditional billing. It's a comprehensive inventory and billing management software designed to simplify your daily operations. With intuitive features, GST compliance, and real-time tracking, IndiaBills helps you manage your business efficiently, saving time and effort so you can focus on growth. India Bills is trusted by thousands of businesses across India. Here's what sets us apart."
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
        para="Our IndiaBills platform is built specifically for Indian businesses, keeping in mind local tax regulations, compliance norms, and business workflows. Whether it's GST integration, e-invoicing, or managing TDS, every IndiaBills feature is tailored to match Indian accounting standards and practices. We understand the unique challenges faced by Indian enterprises—from small startups to large corporations—and have designed intuitive solutions to meet them efficiently. With support for regional languages and multi-location operations, our system ensures smooth, compliant, and scalable business management, helping you stay focused on growth while we handle the complexities of Indian business operations."
        graphic={<img src={IndianBusiness} alt="Business" width="200" />}
        graphicPosition="right"
        readMoreText="Read More"
        readMoreLink="#"
      />
      <FeatureTile
        title="Bank-Grade Security"
        para="Your data is safeguarded with enterprise-level encryption protocols in IndiaBills, ensuring the highest standards of protection similar to those used by leading banks. We implement end-to-end encryption, secure data storage, and industry-standard authentication methods to prevent unauthorized access. Regular security audits, compliance checks, and real-time threat monitoring further strengthen our India Bills defenses. With multi-layered security architecture and proactive risk management, your sensitive information remains safe and confidential at all times—so you can operate your business with complete peace of mind using IndiaBills."
        graphic={<img src={BankGradeSecurity} alt="Security" width="200" />}
        graphicPosition="left"
        readMoreText="Read More"
        readMoreLink="#"
      />
      <FeatureTile
        title="Lightning Fast Performance"
        para="Experience blazing-fast performance with IndiaBills, even when handling large datasets or multiple users simultaneously. Our platform is engineered for speed and efficiency, with optimized backend processes and smart data handling that ensure quick load times and seamless navigation. Whether you're generating reports, managing inventory, or collaborating across teams, everything runs smoothly in India Bills—without lag or delays. Built on modern architecture and scalable infrastructure, IndiaBills delivers a responsive experience that keeps up with the pace of your business."
        graphic={<img src={LightningFast} alt="Fast" width="200" />}
        graphicPosition="right"
        readMoreText="Read More"
        readMoreLink="#"
      />
      <FeatureTile
        title="24/7 IndiaBills Support"
        para="Our dedicated IndiaBills support team is available around the clock to assist you with any questions or issues you may encounter. Whether it's technical help, feature guidance, or account-related queries, we're here to ensure your business operations run smoothly without interruption. With multiple channels of India Bills support—including chat, email, and phone—you can reach us anytime, day or night. We prioritize quick response times and effective solutions, so you can focus on what matters most: growing your business with IndiaBills."
        graphic={<img src={Support} alt="Support" width="200" />}
        graphicPosition="left"
        readMoreText="Read More"
        readMoreLink="#"
      />

      <TilesContainer
        tittle={'What Makes IndiaBills Different'}
        description={
          'Discover the unique features that set IndiaBills apart from other billing solutions. Our innovative approach addresses the specific challenges faced by modern Indian businesses. India Bills offers cutting-edge technology for business growth.'
        }
        background={1}
      >
        <USPTile
          icon={<AlertTriangle size={40} color="#e63946" />}
          title="Smart Expiry Alert System"
          description="Never lose money on expired inventory again with IndiaBills. Our intelligent alert system monitors product expiry dates and sends timely notifications to help you take action before it's too late."
          benefits={[
            'Real-time expiry tracking for all products',
            'Customizable alert timelines (7, 15, 30 days)',
            'Automated email and SMS notifications',
            'Batch-wise expiry management',
            'Loss prevention analytics',
          ]}
          color="primary"
        />

        <USPTile
          icon={<Warehouse size={40} color="#e63946" />}
          title="Virtual Godown Technology"
          description="Revolutionize your inventory management with our IndiaBills virtual warehouse system. Organize, track, and manage your stock across multiple virtual locations without physical constraints."
          benefits={[
            'Unlimited virtual warehouse creation',
            'Location-based inventory segregation',
            'Cross-warehouse stock transfers',
            'Zone-wise stock allocation',
            'Digital warehouse mapping',
          ]}
          color="secondary"
        />

        <USPTile
          icon={<Zap size={40} color="#e63946" />}
          title="Quick Commerce Ready"
          description="Built for the fast-paced world of quick commerce. IndiaBills handles rapid order processing, instant inventory updates, and real-time delivery tracking with ease."
          benefits={[
            'Sub-minute order processing',
            'Real-time inventory sync',
            'Instant delivery tracking',
            'Quick payment reconciliation',
            'Automated stock replenishment alerts',
          ]}
          color="success"
        />
      </TilesContainer>

      <TilesContainer
        tittle={'What Our IndiaBills Clients Say'}
        description={
          "Don't just take our word for it. Here's what businesses like yours have to say about IndiaBills and India Bills."
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