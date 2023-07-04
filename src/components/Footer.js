
import { Link } from "react-router-dom";


function Footer(){
return(
<>
<footer>
        {/* Footer Start*/}
        <div className="footer-area section-bg" style={{backgroundImage:`url(/img/gallery/footer_bg.png)`}}>
            <div className="container">
                <div className="footer-top footer-padding">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                            <div className="single-footer-caption mb-50">
                                {/* logo */}
                                <div className="footer-logo">
                                    <Link to="/"><img src="/img/logo/logo2_footer.png" alt="logo"/></Link>
                                </div>
                                <div className="footer-tittle">
                                    <div className="footer-pera">
                                        <p className="info1">Receive updates and latest news direct from Simply enter.</p>
                                    </div>
                                </div>
                                <div className="footer-number">
                                    <h4><span>+91 </span>0000 0000</h4>
                                    <p>apnasaloon@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>Location </h4>
                                    <ul>
                                        <li><Link to="/">Advanced</Link></li>
                                        <li><Link to="/"> Management</Link></li>
                                        <li><Link to="/">Corporate</Link></li>
                                        <li><Link to="/">Customer</Link></li>
                                        <li><Link to="/">Information</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>Explore</h4>
                                    <ul>
                                        <li><Link to="/">Cookies</Link></li>
                                        <li><Link to="/">About</Link></li>
                                        <li><Link to="/">Privacy Policy</Link></li>
                                        <li><Link to="/">Proparties</Link></li>
                                        <li><Link to="/">Licenses</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>Location</h4>
                                    <div className="footer-pera">
                                        <p className="info1">Subscribe now to get daily updates</p>
                                    </div>
                                </div>
                                {/* Form */}
                                <div className="footer-form">
                                    <div id="mc_embed_signup">
                                        <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative mail_part" novalidate="true">
                                            <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " className="placeholder hide-on-focus" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Your email address'"/>
                                            <div className="form-icon">
                                                <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">Send</button>
                                            </div>
                                            <div className="mt-10 info"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-xl-9 col-lg-8">
                            <div className="footer-copy-right">
                                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This website is made <i className="fa fa-heart" aria-hidden="true"></i> by <Link to="/" target="_blank">Anupam</Link>
  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            {/* Footer Social */}
                            <div className="footer-social f-right">
                                <Link to="/"><i className="fab fa-twitter"></i></Link>
                                <Link to="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="/"><i className="fas fa-globe"></i></Link>
                                <Link to="/"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer End */}
    </footer>
    {/* Scroll Up */}
    <div id="back-top" >
        <Link title="Go to Top" to="/"> <i className="fas fa-level-up-alt"></i></Link>
    </div>
    </>

    );
}
export default Footer;