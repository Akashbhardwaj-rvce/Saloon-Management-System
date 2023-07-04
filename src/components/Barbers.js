import { Link, useLocation } from "react-router-dom";
import {useEffect, useState} from 'react';
import 'aos/dist/aos.css';

function Barbers(){
    const location = useLocation();
    let shopdetails={shop:location.state.id}
    const [shops ,setshops]=useState([])
    const sh = { id:shopdetails.shop }
    useEffect(()=>{

        getdetails()
 
    },[])

     
    const getdetails = async () => {
    const details = await fetch('http://localhost:5000/fetchbarbersforcustomer',{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(sh)
    })
    
    const userdetails = await details.json();
    setshops(userdetails)

    }
    
return(
    <main>
        {/*slider Area Start */}
        <div className="slider-area position-relative fix">
            <div className="slider-active">
                {/*Single Slider */}

                {/*Single Slider */}  
                <div className="single-slider slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                                <div className="hero__caption ">
                                    <span data-animation="fadeInUp" data-delay="0.2s">with patrick potter</span>
                                    <h1 data-animation="fadeInUp" data-delay="0.5s">Our Hair Style make your look elegance</h1>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>
            </div>
            {/*stroke Text */}
            <div className="stock-text">
                <h2>Get More confident</h2>
                <h2>Get More confident</h2>
            </div>
             {/*Arrow */}
             <div className="thumb-content-box">
                <div className="thumb-content">
                    <h3>make an appointment now</h3>
                    <Link to="/user"> <i className="fas fa-long-arrow-alt-right"></i></Link>
                </div>
            </div>
        </div>
        
        {/*slider Area End */}
        {/*About Area Start */} 
        <section className="about-area section-padding30 position-relative">
            <div className="container">
                <div className="row align-items-center">
                    {/* <div className="col-lg-6 col-md-11">
                        {/*about-img 
                        <div className="about-img ">
                            <img src="/img/gallery/about.png" alt="about"/>
                        </div>
                    </div> */}
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

                {  shops.map((shop) =>{ return(      
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-caption text-center mb-30">
                            <div className="service-icon">
                                <i className="flaticon-healthcare-and-medical"></i>
                            </div> 
                            <div className="service-cap">
                                <h4><Link to={"/appointment"} state={{barberid:shop._id, shopid:shop.shop, barbername:shop.barbername}}><span className="text-warning">{shop.barbername}</span></Link></h4>
                                <h3>Experience <span className="text-success">{shop.experience}</span></h3>
                                <h3>Specilist <span className="text-primary">{shop.specilist}</span></h3>
                            </div>
                        </div>
                    </div>
                      )})
                        } 
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
                                <img src="/img/gallery/team3.png" alt="team3"/>
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
                                <img src="/img/gallery/team2.png" alt=""/>
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
                        {/*Pricing */}  
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="pricing-list">
                                    <ul>
                                        <li>Styling. . . . . . . . . . . . . . . . . . . . . . . . . . . . <span>120 &#8377;</span></li>
                                        <li>Styling + Color. . . . . . . . . . . . . . . . . . . <span>650 &#8377;</span></li>
                                        <li>Styling + Tint. . . . . . . . . . . . . . . . . . . . . .<span>600 &#8377;</span></li>
                                        <li>  Semi-permanent wave. . . . . . . . . . . . .<span>700 &#8377;</span></li>
                                        <li> Cut + Styling. . . . . . . . . . . . . . . . . . . . . .<span>200 &#8377;</span></li>
                                        <li> Cut + Styling + Color. . . . . . . . . . . . . <span>1000 &#8377;</span></li>
                                        <li> Cut + Styling + Tint. . . . . . . . . . . . . . . .<span>800 &#8377;</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="pricing-list">
                                    <ul>
                                        <li>Cut. . . . . . . . . . . . . . . . . . . . . . . . . . . . .<span>80 &#8377;</span></li>
                                        <li>Shave. . . . . . . . . . . . . . . . . . . . . . . . . . <span>100 &#8377;</span></li>
                                        <li>Beard trim. . . . . . . . . . . . . . . . . . . . . .  <span>80 &#8377;</span></li>
                                        <li>Cut + beard trim. . . . . . . . . . . . . . . . .  <span>150 &#8377;</span></li>
                                        <li>Cut + shave. . . . . . . . . . . . . . . . . . . . . . .<span>150 &#8377;</span></li>
                                        <li>Clean up. . . . . . . . . . . . . . . . . . . . . . . . .<span>100 &#8377;</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/*pricing img */} 
            <div className="pricing-img">
                <img className="pricing-img1" src="/img/gallery/pricing1.png" alt="price1"/>
                <img className="pricing-img2" src="/img/gallery/pricing2.png" alt="price2"/>
            </div>
        </div>
        {/*Best Pricing Area End */}
         {/*Gallery Area Start */} 
        <div className="gallery-area section-padding30">
            <div className="container">
                 {/*Section Tittle */} 
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
         {/*Cut Details Start */} 
        <div className="cut-details section-bg section-padding2" style={{backgroundImage:`url(/img/gallery/section_bg02.png)`}}>
           <div className="container">
            <div className="cut-active dot-style">
                <div className="single-cut">
                    <div className="cut-icon mb-20">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50px" height="50px">
                            <image  x="0px" y="0px" width="50px" height="50px"  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkBQ4MDDIERuyfAAADc0lEQVRYw7WYXWxTZRjH/+e0ikhh7QgfiYJZZ7bhBC6mU0LQ6DBADNGYLEaNJGpi4jTEQczYjQG8EL2ThAUTvTRGBwmECyBA+XRKHJpUL1yXFseWbe1ixgZCSAg/Lmo9bXe+up0+/5vT//Oc9/ee8z7nqwbyGbVqUL2iiuiurmtMKf2tu/52DXtW1OhVtekFRZTSkCY1rYcV0VI1arl+VULH9JvnGLhpHT/wD728z+M22QVs5ksyJOlkgds4zqlWEgzSQQ3uEzF4ju8ZpZsHK4NEOcgo7xL2AFhq4CgDtPmHPEWGg0R9AwrayjD77CY2s/RtsrRXDMhrCSc5wyIvyE6GaJ4lQogQB/idZW6QjxlkxRwQee0lWdoupec0a9uqlauHM8VrYyXqyLIuEIQIcYLPZ0JC/EJnQIh8C4xYDV0wO0hgBAgRm0kxrxhSS46mQBFCHKa7GLKbbwNHiCayRAqQCBMBdVW5etlRgGzjWFUQYgMDGHnIaZfbSIxTWNFP3MGzl0GaViQWMVXoAhv9SGn0O3hO+oLPkHiZ4y5FacrD3nPSJn5GptbrJ7+P+VnERa3VA6bWKFlFyC0NqdFUXOkqQqS06kwt1XhVIeNaZiqqSZeS0z4955jWwrBCuudSskvSRklSTDEXzznuaJ74l/m+rt4Wm3Zt8WxhcYAOU5Na7OuwJ3165RHTlKlhrfQFaZckXfH0ymOFhsNKaZX6POYSU7v2SZJ6XTz7aFJKbKfH9ZxuLLp9pIk5evaKM4ZMndXzrjOJ/7+V0Uv/rYKdZx9tOi8Jg3HqPY+kn66iGdt59jrMe/nnyX52V+mhVcsNFuchLWQqeH+vRB9xCBVeJC7xZhUQYTKstyBb+JNQ4JB3OJvfKhgJPggYEeEaz5ZCmpgI4H2+WD18Xdi2zG4uBbj8r5GxvtUs2+AE+wNCrCZHq/W7OBUlya4AEI9yjbeKnfL0VbrmiIgzyCelXnnJI/zBV3NYm6cZoaPcnVkW4yQXZtVpBp1keWVmxq7YpIsc2ys8nmbOc5k6u5zTLqtIkOQNn/eBer4hx4eY9nm3XbdwkTSfun67PEQ7R8ixh1rnKsPj/64WbdPrmtI5XdGAruqGrmu+IlquBj2hDXpGl/WdDumm2yBeEEky9KRe1Go16jFFFNVt3dSEUvpLfbqgae8B7gNdcvnkrRzZ4gAAAABJRU5ErkJggg==" />
                        </svg>
                    </div>
                    <div className="cut-descriptions">
                        <p>Vestibulum varius, velit sit amet tempor efficitur, ligula mi lacinia libero, vehicula dui nisi eget purus. Integer cursus nibh non risus maximus dictum. Suspendis.</p>
                        <span>JONT NICOLIN KOOK</span>
                    </div>
                </div>
                <div className="single-cut">
                    <div className="cut-icon mb-20">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50px" height="50px">
                            <image  x="0px" y="0px" width="50px" height="50px"  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkBQ4MDDIERuyfAAADc0lEQVRYw7WYXWxTZRjH/+e0ikhh7QgfiYJZZ7bhBC6mU0LQ6DBADNGYLEaNJGpi4jTEQczYjQG8EL2ThAUTvTRGBwmECyBA+XRKHJpUL1yXFseWbe1ixgZCSAg/Lmo9bXe+up0+/5vT//Oc9/ee8z7nqwbyGbVqUL2iiuiurmtMKf2tu/52DXtW1OhVtekFRZTSkCY1rYcV0VI1arl+VULH9JvnGLhpHT/wD728z+M22QVs5ksyJOlkgds4zqlWEgzSQQ3uEzF4ju8ZpZsHK4NEOcgo7xL2AFhq4CgDtPmHPEWGg0R9AwrayjD77CY2s/RtsrRXDMhrCSc5wyIvyE6GaJ4lQogQB/idZW6QjxlkxRwQee0lWdoupec0a9uqlauHM8VrYyXqyLIuEIQIcYLPZ0JC/EJnQIh8C4xYDV0wO0hgBAgRm0kxrxhSS46mQBFCHKa7GLKbbwNHiCayRAqQCBMBdVW5etlRgGzjWFUQYgMDGHnIaZfbSIxTWNFP3MGzl0GaViQWMVXoAhv9SGn0O3hO+oLPkHiZ4y5FacrD3nPSJn5GptbrJ7+P+VnERa3VA6bWKFlFyC0NqdFUXOkqQqS06kwt1XhVIeNaZiqqSZeS0z4955jWwrBCuudSskvSRklSTDEXzznuaJ74l/m+rt4Wm3Zt8WxhcYAOU5Na7OuwJ3165RHTlKlhrfQFaZckXfH0ymOFhsNKaZX6POYSU7v2SZJ6XTz7aFJKbKfH9ZxuLLp9pIk5evaKM4ZMndXzrjOJ/7+V0Uv/rYKdZx9tOi8Jg3HqPY+kn66iGdt59jrMe/nnyX52V+mhVcsNFuchLWQqeH+vRB9xCBVeJC7xZhUQYTKstyBb+JNQ4JB3OJvfKhgJPggYEeEaz5ZCmpgI4H2+WD18Xdi2zG4uBbj8r5GxvtUs2+AE+wNCrCZHq/W7OBUlya4AEI9yjbeKnfL0VbrmiIgzyCelXnnJI/zBV3NYm6cZoaPcnVkW4yQXZtVpBp1keWVmxq7YpIsc2ys8nmbOc5k6u5zTLqtIkOQNn/eBer4hx4eY9nm3XbdwkTSfun67PEQ7R8ixh1rnKsPj/64WbdPrmtI5XdGAruqGrmu+IlquBj2hDXpGl/WdDumm2yBeEEky9KRe1Go16jFFFNVt3dSEUvpLfbqgae8B7gNdcvnkrRzZ4gAAAABJRU5ErkJggg==" />
                        </svg>
                    </div>
                    <div className="cut-descriptions">
                        <p>Vestibulum varius, velit sit amet tempor efficitur, ligula mi lacinia libero, vehicula dui nisi eget purus. Integer cursus nibh non risus maximus dictum. Suspendis.</p>
                        <span>JONT NICOLIN KOOK</span>
                    </div>
                </div>
                <div className="single-cut">
                    <div className="cut-icon mb-20">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50px" height="50px">
                            <image  x="0px" y="0px" width="50px" height="50px"  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkBQ4MDDIERuyfAAADc0lEQVRYw7WYXWxTZRjH/+e0ikhh7QgfiYJZZ7bhBC6mU0LQ6DBADNGYLEaNJGpi4jTEQczYjQG8EL2ThAUTvTRGBwmECyBA+XRKHJpUL1yXFseWbe1ixgZCSAg/Lmo9bXe+up0+/5vT//Oc9/ee8z7nqwbyGbVqUL2iiuiurmtMKf2tu/52DXtW1OhVtekFRZTSkCY1rYcV0VI1arl+VULH9JvnGLhpHT/wD728z+M22QVs5ksyJOlkgds4zqlWEgzSQQ3uEzF4ju8ZpZsHK4NEOcgo7xL2AFhq4CgDtPmHPEWGg0R9AwrayjD77CY2s/RtsrRXDMhrCSc5wyIvyE6GaJ4lQogQB/idZW6QjxlkxRwQee0lWdoupec0a9uqlauHM8VrYyXqyLIuEIQIcYLPZ0JC/EJnQIh8C4xYDV0wO0hgBAgRm0kxrxhSS46mQBFCHKa7GLKbbwNHiCayRAqQCBMBdVW5etlRgGzjWFUQYgMDGHnIaZfbSIxTWNFP3MGzl0GaViQWMVXoAhv9SGn0O3hO+oLPkHiZ4y5FacrD3nPSJn5GptbrJ7+P+VnERa3VA6bWKFlFyC0NqdFUXOkqQqS06kwt1XhVIeNaZiqqSZeS0z4955jWwrBCuudSskvSRklSTDEXzznuaJ74l/m+rt4Wm3Zt8WxhcYAOU5Na7OuwJ3165RHTlKlhrfQFaZckXfH0ymOFhsNKaZX6POYSU7v2SZJ6XTz7aFJKbKfH9ZxuLLp9pIk5evaKM4ZMndXzrjOJ/7+V0Uv/rYKdZx9tOi8Jg3HqPY+kn66iGdt59jrMe/nnyX52V+mhVcsNFuchLWQqeH+vRB9xCBVeJC7xZhUQYTKstyBb+JNQ4JB3OJvfKhgJPggYEeEaz5ZCmpgI4H2+WD18Xdi2zG4uBbj8r5GxvtUs2+AE+wNCrCZHq/W7OBUlya4AEI9yjbeKnfL0VbrmiIgzyCelXnnJI/zBV3NYm6cZoaPcnVkW4yQXZtVpBp1keWVmxq7YpIsc2ys8nmbOc5k6u5zTLqtIkOQNn/eBer4hx4eY9nm3XbdwkTSfun67PEQ7R8ixh1rnKsPj/64WbdPrmtI5XdGAruqGrmu+IlquBj2hDXpGl/WdDumm2yBeEEky9KRe1Go16jFFFNVt3dSEUvpLfbqgae8B7gNdcvnkrRzZ4gAAAABJRU5ErkJggg==" />
                        </svg>
                    </div>
                    <div className="cut-descriptions">
                        <p>Vestibulum varius, velit sit amet tempor efficitur, ligula mi lacinia libero, vehicula dui nisi eget purus. Integer cursus nibh non risus maximus dictum. Suspendis.</p>
                        <span>JONT NICOLIN KOOK</span>
                    </div>
                </div>
            </div>
           </div>
        </div>
         {/*Cut Details End */} 
         {/*Blog Area Start */} 
        <section className="home-blog-area section-padding30">
            <div className="container">
                 {/*Section Tittle */} 
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                        <div className="section-tittle text-center mb-90">
                            <span>our recent news</span>
                            <h2>Hipos and tricks from recent blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="home-blog-single mb-30">
                            <div className="blog-img-cap">
                                <div className="blog-img">
                                    <img src="/img/gallery/home-blog1.png" alt="blog1"/>
                                    {/*Blog date*/}  
                                    <div className="blog-date text-center">
                                        <span>24</span>
                                        <p>Now</p>
                                    </div>
                                </div>
                                <div className="blog-cap">
                                    <p>|   Physics</p>
                                    <h3><Link to="blog_details.html">Footprints in Time is perfect House in Kurashiki</Link></h3>
                                    <Link to="blog_details.html" className="more-btn">became a member »</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="home-blog-single mb-30">
                            <div className="blog-img-cap">
                                <div className="blog-img">
                                    <img src="/img/gallery/home-blog2.png" alt="blog2"/>
                                     {/*Blog date*/} 
                                    <div className="blog-date text-center">
                                        <span>24</span>
                                        <p>Now</p>
                                    </div>
                                </div>
                                <div className="blog-cap">
                                    <p>|   Physics</p>
                                    <h3><Link to="blog_details.html">Footprints in Time is perfect House in Kurashiki</Link></h3>
                                    <Link to="blog_details.html" className="more-btn">became a member »</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Blog Area End*/}  
    </main>

);
}
export default Barbers;