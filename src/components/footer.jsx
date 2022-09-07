import "../styles/footer.css"
const Footer= () =>{
    return(
        <footer className="footer">
                <div className="main-foot">
                <div className="quick-links">
                    <h4>Quick links</h4>
                    <ul className="ql-list">
                        <li className="quick">Web design</li>
                        <li className="quick">Android app development</li>
                        <li className="quick">IOS app development</li>
                        <li className="quick">Flutter app development</li>
                        <li className="quick">Custom CRM development</li>
                    </ul>
                </div>
                <div className="other-pages">
                    <h4>Other pages</h4>
                    <ul className="op-list">
                        <li className="other">Careers with us</li>
                        <li className="other">Business with us</li>
                        <li className="other">Privacy policy</li>
                        <li className="other">Return policy</li>
                        <li className="other">Terms and Conditions</li>
                    </ul>
                </div>
                <div className="address">
                    <h4>Address</h4>
                    <ul className="add-list">
                        <li className="add"> <i class="fad fa-location-arrow ad-icon"></i>  Calcutta</li>
                        <li className="add"> <i class="fas fa-phone-alt ad-icon"></i> +91 1234567890</li>
                        <li className="add"> <i class="fad fa-mailbox ad-icon"></i> abc@gmail.com</li>
                    </ul>
                </div>
                </div>
                <div className="contact-icons">
                    <span className="con-icons"> <i class="fab fa-linkedin fa-2x ad-icon"></i> </span>
                    <span className="con-icons"> <i class="fab fa-twitter fa-2x ad-icon"></i> </span>
                    <span className="con-icons"> <i class="fab fa-youtube fa-2x ad-icon"></i> </span>
                    <span className="con-icons"> <i class="fab fa-facebook-f fa-2x ad-icon"></i> </span>
                </div>
            </footer>
    )
}

export { Footer } 