import React from 'react';
import Aboutimg from '../images/why-we-different.jpeg';
import { ResponsiveComponent } from './ResponsiveComponent'; // Import the ResponsiveComponent

export default function WhyWeDifferent() {
    const screenSize = ResponsiveComponent(); // Get the current screen size

    // Define the padding top and bottom based on screen size
    let paddingTopBottom = '50px'; // Default padding value
    let flexDirection = 'row'; // Default flex direction

    if (screenSize === 'phone' || screenSize === 'tablet') {
        paddingTopBottom = '37px';
        flexDirection = 'column-reverse'; // Apply row-reverse on phone and tablet
    }

    return (
        <>
            <section className='why-we-different' id='WhyWeDiff' style={{ paddingTop: paddingTopBottom, paddingBottom: paddingTopBottom }}>
                <div className='container'>
                    <div className='row align-items-center justify-content-between' style={{ flexDirection: flexDirection }}>
                        <div className='col-lg-7'>
                            <img className='why-we-different-img' src={Aboutimg} alt="About Us" />
                        </div>
                        <div className='col-lg-4 mt-1 text-font'>
                            <span >Innovation at the Core</span>
                            <h2 className='primary-heading letter-size heading-font top-bottom-space'>Why We Differnt</h2>
                            <p className='top-bottom-space'>We thrive on innovation. In the ever-evolving world of technology, staying ahead requires a dedication to continuous learning and adapting. Our team of experts is at the forefront of industry trends, utilizing the latest tools and techniques to deliver cutting-edge solutions that give your business a competitive edge.</p>
                            <a href='' className='anchor top-bottom-space'>Read More ...</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
