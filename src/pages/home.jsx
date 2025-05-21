import React from 'react'
import Header from '../components/home/Header'
import TilesContainer from '../components/containerTestimonials/TilesContainer'
import Tile from '../components/containerTestimonials/Tile'
import Testimonials from '../components/containerTestimonials/Testimonials'
import TrustedCompaniesSection from '../components/home/TrustedCompaniesSection'
import UserDetails from '../components/home/UserDetails'
import PasteSVG from '../components/home/svg/pasteSVG'
import CorrectSVG from '../components/home/svg/correctSVG'
import LockSVG from '../components/home/svg/LockSVG'
import ThunderSVG from '../components/home/svg/ThunderSVG'
import SupportSVG from '../components/home/svg/SupportSVG'

function Home() {
    return (
        <div>
           <Header/>
             <TilesContainer tittle={"Why IndiaBills?"} description={"We're more than just a billing software. Here's what sets us apart."} background={0} >
            <Tile tittle={"Made for Indian Businesses"} para={"Designed specifically with Indian tax laws, business practices, and requirements in mind."} iconDirection={"inline"} width="45vw" icon={<CorrectSVG/>} />
            <Tile tittle={"Bank-Grade Security"} para={"Your data is protected with enterprise-level encryption and regular security audits."} iconDirection={"inline"} width="45vw" icon={<LockSVG/>} />
            <Tile tittle={"Lightning Fast"} para={"Optimized for speed, even with large datasets and multiple users."} iconDirection={"inline"} width="45vw" icon={<ThunderSVG/>} />
            <Tile tittle={"24/7 Support"} para={"Our dedicated support team is always available to help you with any issues."} iconDirection={"inline"} width="45vw" icon={<SupportSVG/>} />
            </TilesContainer>
            <TilesContainer tittle={"What Our Clients Say"} description={"Don't just take our word for it. Here's what businesses like yours have to say."} background={1}  >
                <Testimonials username={"Rajesh Kumar"} bio={"Retail Store Owner, Delhi"} review={"IndiaBills has transformed how we manage our invoicing. The GST compliance features alone have saved us countless hours of work each month."
                } iconText={"RK"} stars={"★★★"} />
                <Testimonials username={"Sunita Patel"} bio={"Wholesale Distributor, Mumbai"} review={"The inventory management system is a game-changer. We can now track our stock across multiple locations in real-time, which has reduced our stockouts by 70%."
                } iconText={"SP"} stars={"★★★★★"} />
                <Testimonials username={"Anand Reddy"} bio={"Restaurant Owner, Bangalore"} review={"Customer support is exceptional. Whenever we've had questions, the team has been quick to respond and incredibly helpful. The mobile app is also a huge plus."
                } iconText={"AR"} stars={"★★★★"} />
            </TilesContainer>
            <TrustedCompaniesSection/>
            <UserDetails/>
        </div>
    )
}

export default Home
