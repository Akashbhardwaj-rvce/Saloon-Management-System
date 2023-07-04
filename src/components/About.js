import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
function About(){
    return(
    <main>
        {/*Hero Start */} 
        <div className="slider-area2">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 pt-70 text-center">
                                <h2>About US</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*Hero End */}
        {/*About Area Start */}
        <section className="about-area section-padding30 position-relative">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-11">
                        {/*about-img */} 
                        <div className="about-img ">
                            <img src="/img/gallery/about.png" alt="about"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-caption">
                            {/*Section Tittle */}
                            <div className="section-tittle section-tittle3 mb-35">
                                <span>About Our company</span>
                                <h2>52 Years Of Experience In Hair cut!</h2>
                            </div>
                            <p className="mb-30 pera-bottom">Brook presents your services with flexible, convenient and cdpoe layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfreplication of the designers is intended.</p>
                            <p className="pera-top mb-50">Brook presents your services with flexible, convefnient and ent anipurpose layouts. You can select your favorite.</p>
                            <img src="/img/gallery/signature.png" alt="signature"/>
                        </div>
                    </div>
                </div>
            </div>
            {/*About Shape */}
            <div className="about-shape">
                <img src="/img/gallery/about-shape.png" alt="about-shape"/>
            </div>
        </section>
        {/*About-2 Area End */}
        {/*Services Area Start */}
        <section className="service-area pb-170">
            <div className="container">
                {/*Section Tittle */} 
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-11 col-sm-11">
                        <div className="section-tittle text-center mb-90">
                            <span>Professional Services</span>
                            <h2>Our Best services that  we offering to you</h2>
                        </div>
                    </div>
                </div>
                {/*Section caption */} 
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-caption text-center mb-30">
                            <div className="service-icon">
                                <i className="flaticon-healthcare-and-medical"></i>
                            </div> 
                            <div className="service-cap">
                                <h4><Link to="/">Stylish Hair Cut</Link></h4>
                                <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-caption active text-center mb-30">
                            <div className="service-icon">
                                <i className="flaticon-healthcare-and-medical"></i>
                            </div> 
                            <div className="service-cap">
                                <h4><Link to="/">Body Massege</Link></h4>
                                <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                            </div>
                        </div>
                    </div> 
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-caption text-center mb-30">
                            <div className="service-icon">
                                <i className="flaticon-healthcare-and-medical"></i>
                            </div> 
                            <div className="service-cap">
                                <h4><Link to="/">Breard Style</Link></h4>
                                <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Services Area End */}
        {/*Team Start */} 
        <div className="team-area pb-180">
            <div className="container">
                {/*Section Tittle */}
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-11 col-sm-11">
                        <div className="section-tittle text-center mb-100">
                            <span>Professional Teams</span>
                            <h2>Our award winner hair cut exparts for you</h2>
                        </div>
                    </div>
                </div>
                <div className="row team-active dot-style">
                    {/*single Tem */}  
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                        <div className="single-team mb-80 text-center">
                            <div className="team-img">
                                <img src="/img/gallery/team1.png" alt="team1"/>
                            </div>
                            <div className="team-caption">
                                <span>Master Barber</span>
                                <h3><Link to="/">Guy C. Pulido bks</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                        <div className="single-team mb-80 text-center">
                            <div className="team-img">
                                <img src="/img/gallery/team2.png" alt="team2"/>
                            </div>
                            <div className="team-caption">
                                <span>Color Expart</span>
                                <h3><Link to="/">Steve L. Nolan</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                        <div className="single-team mb-80 text-center">
                            <div className="team-img">
                                <img src="assets/img/gallery/team3.png" alt="team3"/>
                            </div>
                            <div className="team-caption">
                                <span>Master Barber</span>
                                <h3><Link to="/">Edgar P. Mathis</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                        <div className="single-team mb-80 text-center">
                            <div className="team-img">
                                <img src="/img/gallery/team2.png" alt="team2"/>
                            </div>
                            <div className="team-caption">
                                <span>Master Barber</span>
                                <h3><Link to="/">Edgar P. Mathis</Link></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*Team End */} 
        {/*Best Pricing Area Start */} 
        <div className="best-pricing section-padding2 position-relative">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-tittle mb-50">
                            <span>Our Best Pricing</span>
                            <h2>We provide best price<br/> in the city!</h2>
                        </div>
                        {/* Pricing   */}
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="pricing-list">
                                    <ul>
                                        <li>Styling. . . . . . . . . . . . . . . . . . . . . . . . . . . . <span>$25</span></li>
                                        <li>Styling + Color. . . . . . . . . . . . . . . . . . . <span>$65</span></li>
                                        <li>Styling + Tint. . . . . . . . . . . . . . . . . . . . . .<span>$65</span></li>
                                        <li>  Semi-permanent wave. . . . . . . . . . . . .<span>$65</span></li>
                                        <li> Cut + Styling. . . . . . . . . . . . . . . . . . . . . .<span>$63</span></li>
                                        <li> Cut + Styling + Color. . . . . . . . . . . . . <span>$100</span></li>
                                        <li> Cut + Styling + Tint. . . . . . . . . . . . . . . .<span>$100</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="pricing-list">
                                    <ul>
                                        <li>Cut. . . . . . . . . . . . . . . . . . . . . . . . . . . . .<span>$25</span></li>
                                        <li>Shave. . . . . . . . . . . . . . . . . . . . . . . . . . <span>$65</span></li>
                                        <li>Beard trim. . . . . . . . . . . . . . . . . . . . . .  <span>$65</span></li>
                                        <li>Cut + beard trim. . . . . . . . . . . . . . . . .  <span>$65</span></li>
                                        <li>Cut + shave. . . . . . . . . . . . . . . . . . . . . . .<span>$63</span></li>
                                        <li>Clean up. . . . . . . . . . . . . . . . . . . . . . . . .<span>$100</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*pricing img  */}
            <div className="pricing-img">
                <img className="pricing-img1" src="/img/gallery/pricing1.png" alt="price1"/>
                <img className="pricing-img2" src="/img/gallery/pricing2.png" alt="price2"/>
            </div>
        </div>
        {/*Best Pricing Area End */}
        {/*Gallery Area Start  */}
        <div className="gallery-area section-padding30">
            <div className="container">
                {/*Section Tittle  */}
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-9 col-sm-10">
                        <div className="section-tittle text-center mb-100">
                            <span>our image gellary</span>
                            <h2>some images from our barber shop</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img " style={{backgroundImage: `url(/img/gallery/gallery1.png)`}}></div>
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img " style={{backgroundImage: `url(/img/gallery/gallery2.png)`}}></div>
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img " style={{backgroundImage: `url(/img/gallery/gallery3.png)`}}></div>
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img " style={{backgroundImage:` url(/img/gallery/gallery4.png)`}}></div>
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*Gallery Area End */}


    </main>
);
}
export default About;
