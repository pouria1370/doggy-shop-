import React from 'react'
import {Link} from 'react-router-dom' 
import './footer.style.scss'
const Footer=()=> {
    return (
        <div className="footer">
            <div className="social-medias">
            <Link to="https://google.com">SocialIcon1</Link>
            <Link to="https://google.com">SocialIcon2</Link>
            <Link to="https://google.com">SocialIcon3</Link>
            <Link to="https://google.com">SocialIcon4</Link>
            </div>
            <div className="good-links">
            <Link to="https://google.com">Link1</Link>
            <Link to="https://google.com">Link2</Link>
            <Link to="https://google.com">Link3</Link>
            <Link to="https://google.com">Link4</Link>
            </div>
            <div className="other-products">
            <Link to="https://google.com">Product1</Link>
            <Link to="https://google.com">Product2</Link>
            <Link to="https://google.com">Product3</Link>
            <Link to="https://google.com">Product4</Link>
            </div>
            <div className="rights">
            <p>
            "کلیه حقوق این سایت تحت حفاظت واحد حقوقی شرکت الف/ب/س هست 1400"
            </p>
            </div>
        </div>
    )
}
export default Footer