import "../styles/homepage.css"; 
import Tilt from "react-vanilla-tilt"
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
const Homepage = () =>{
    return(
        <div className="main">
            <Navbar/>
            <div className="front-cont">
                <div className="left-cont">
                    <img src="hero.svg" alt="hero" className="hero-image"/>
                </div>
                <div className="right-cont">
                    <div className="info-card">
                        <div className="info-content">
                            <span className="card-brand">Vaani Techlabs</span>
                            <p className="extra-line">Creativity with perfection</p>
                            <p>We craft astonishing websites, magnificent high geared Apps for Android/IOS and others, innovative CRM that ensure overall growth of your business.</p>
                            <button className="explore-btn"><a href="https://vaanitechlabs.com/portfolio" className="no-link-style">Explore</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <Tilt options={{ speed: 400, max: 25 }} className="port-card">
                    <span className="badge">Web Design</span>
                    <div className="img-part">
                    <img src="laptop.svg" alt="laptop" className="laptop-card" />
                    </div>
                    <div className="main-area">
                        <h4>ERA International Consulting</h4>
                        <p className="main-info">We have developed website for Era International Consulting Pty Ltd, which is a service-based Australian MNC.</p>
                        <button className = "card-btn">Read more</button>
                    </div>
                </Tilt>
                <Tilt options={{ speed: 400, max: 25 }} className="port-card">
                    <span className="badge">Web Design</span>
                    <div className="img-part">
                    <img src="laptop.svg" alt="laptop" className="laptop-card" />
                    </div>
                    <div className="main-area">
                        <h4>Argima</h4>
                        <p className="main-info">We have developed this ecommerce website for our portfolio showcasing.</p>
                        <button className = "card-btn">Read more</button>
                    </div>
                </Tilt>
                <Tilt options={{ speed: 400, max: 25 }} className="port-card">
                    <span className="badge">Android Dev</span>
                    <div className="img-part">
                    <img src="mobile.svg" alt="laptop" className="laptop-card" />
                    </div>
                    <div className="main-area">
                        <h4>SC/ST News</h4>
                        <p className="main-info">We have developed mobile apps SC/ST News, which is the No. 1 supply for tech information.</p>
                        <button className = "card-btn">Read more</button>
                    </div>
                </Tilt>
                <Tilt options={{ speed: 400, max: 25 }} className="port-card">
                    <span className="badge">Android dev</span>
                    <div className="img-part">
                    <img src="mobile.svg" alt="laptop" className="laptop-card" />
                    </div>
                    <div className="main-area">
                        <h4>iFood Rescue</h4>
                        <p className="main-info">We have developed the mobile app of The iFood Rescue app , which collects edible surplus food.</p>
                        <button className = "card-btn">Read more</button>
                    </div>
                </Tilt>
                <Tilt options={{ speed: 400, max: 25 }} className="port-card">
                    <span className="badge">Android Dev</span>
                    <div className="img-part">
                    <img src="mobile.svg" alt="laptop" className="laptop-card" />
                    </div>
                    <div className="main-area">
                        <h4>Wevy Invoice</h4>
                        <p className="main-info">We have developed the mobile app of Wevy Invoice, which lets you quickly make invoices</p>
                        <button className = "card-btn">Read more</button>
                    </div>
                </Tilt>
                <Tilt options={{ speed: 400, max: 25 }} className="port-card">
                    <span className="badge">Android dev</span>
                    <div className="img-part">
                    <img src="mobile.svg" alt="laptop" className="laptop-card" />
                    </div>
                    <div className="main-area">
                        <h4>Nerdy Owl</h4>
                        <p className="main-info">We have developed this elearning app which can be used for any online education portal.</p>
                        <button className = "card-btn">Read more</button>
                    </div>
                </Tilt>
            </div>
            <Footer/>
        </div>
    )

}

export { Homepage };