import React from 'react';
import Banner from '../Banner/Banner';
import SplashCursor from '../SplashCursor/SplashCursor';
import Statas from '../statas/Statas';
import CategorySection from '../category/CategorySection';
import HomeHowItWorks from '../HomeHowItWorks/HomeHowItWorks';
import HomeTestimonials from '../HomeTestimonials/HomeTestimonials';
// import SplashCursor from './SplashCursor'

const Home = () => {
    return (
        <div>
            {/* <SplashCursor></SplashCursor> */}
             <Banner></Banner>
             <Statas></Statas>
             <CategorySection></CategorySection>
             <HomeHowItWorks></HomeHowItWorks>
             <HomeTestimonials></HomeTestimonials>
        </div>
    );
};

export default Home;