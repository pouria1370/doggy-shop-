import React from 'react'
import {Link} from 'react-router-dom' 
import './footer.style.scss'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import PinterestIcon from '@material-ui/icons/Pinterest'



const Footer=()=> {
    return (
        <div className="footer">
            <div className="social-medias">
            <Link to="https://google.com"><FacebookIcon/></Link>
            <Link to="https://google.com"><TwitterIcon/></Link>
            <Link to="https://google.com"><GitHubIcon/></Link>
            <Link to="https://google.com"><PinterestIcon/></Link>
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