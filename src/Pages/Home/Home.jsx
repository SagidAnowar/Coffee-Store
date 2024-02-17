import './home.scss'
import { useState, useEffect } from 'react';
import { ReactComponent as TextDivider } from '../../Assets/text-divider.svg';
import Navbar from '../../Components/Navbar/Navbar';
import ImageSlider from '../../Components/Image-Slider/Image-Slider';
import HomeTitle from '../../Components/Home-Title/Home-Title';
import coffeeImage from "../../Assets/Title-coffee-image.jpg";
import Footer from '../../Components/Footer/Footer';


const Home = () => {

    const [click, setClick] = useState();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [click]);
    
    return (
        <div className='HomePage-container'>
            <ImageSlider/>
            <Navbar/>
            <HomeTitle/>

            <section  className="HomePage-Information-Section">
                <div>
                    <div  className="HomePage-extra-Image">
                        <img alt="coffe" src={coffeeImage}></img>
                    </div>

                    <div className="HomePage-Information-text" >
                        <h1>Welcome</h1>
                        <TextDivider style={{width:"400px"}}/>
                        <p>Morning Aroma is dedicated to providing the best coffee and the best shopping experience. With numerous accolades, we continue to source some of the finest coffee roasters to ensure we provide a memorable experience. </p>
                    </div>
                </div>
            </section>

            <Footer scrollToTop={setClick}/>
        </div>
    )
}

export default Home;