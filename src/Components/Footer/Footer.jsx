import "./Footer.scss";
import { ReactComponent as ArrowUp } from '../../Assets/arrow-up.svg';
import { ReactComponent as Facebook } from '../../Assets/facebook.svg';
import { ReactComponent as Twitter } from '../../Assets/twitter.svg';
import { ReactComponent as Instagram } from '../../Assets/instagram.svg';

const Footer = ({ scrollToTop }) => {
    return (
        <section className="Footer">
            <div className="Footer-div">
                <div>
                    <ArrowUp onClick={scrollToTop} style={{width:"35px", fill:"white", cursor:"pointer"}}/>
                </div>

                <div>
                    <h5 onClick={scrollToTop} >Back to top</h5>
                </div>

                <div>
                    <Facebook className="social" style={{width:"25px", fill:"white", marginRight:"0.5rem", marginLeft:"0.5rem", cursor:"pointer"}}/>
                    <Twitter className="social" style={{width:"25px", fill:"white", marginRight:"0.5rem", marginLeft:"0.5rem", cursor:"pointer"}}/>
                    <Instagram className="social" style={{width:"25px", fill:"white", marginRight:"0.5rem", marginLeft:"0.5rem", cursor:"pointer"}}/>
                </div>

                <div>
                    <p style={{cursor: "default"}}>All Rights Reserved. © 2024 Morning Aroma</p>
                </div>

            </div>
        </section>
    )
};

export default Footer;