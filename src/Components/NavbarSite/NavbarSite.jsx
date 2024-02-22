import "./NavbarSite.scss";
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../Assets/Morning Aroma.svg";
import Toggle from 'react-toggle'
import { Sling as Hamburger } from 'hamburger-react'
import MusicContext from "../../Context/musicContext";



const NavbarSite = () => {

    const {play, stop, checked, setChecked} = useContext(MusicContext);
    const [isOpen, setOpen] = useState(false);
    
    return (
        <nav className="HomePage-NavBar-Site">
            <div className="NavBar-Container-Site">
                <div>
                    <Link className="Navbar-Title-Site" to ="/"><Logo style={ {width: "150px", zIndex: "3", position: "relative"} }/></Link>
                </div>

                <div>
                    <ul>
                        <li>
                            <Link className="Navbar-Link-Site" to="/">HOME</Link>
                        </li>
                        <li>
                            <Link className="Navbar-Links-Site" to="/shop">SHOP</Link>
                        </li>
                        <li>
                            <Link className="Navbar-Links-Site" to="/about">ABOUT</Link>
                        </li>

                        
                        <li>
                            <Link className="Navbar-Links-Site" to="/login">SIGN IN</Link> 
                        </li> 

                        <li>
                            <Hamburger  toggled={isOpen} toggle={setOpen} />
                        </li>

                        <div className='hamburger-section' style={isOpen? {top:"0px"} : {top: "-295px"}}>
                            <div className="hamburger-container" >
                                <Link className="hamburger" to='/'> HOME </Link>
                                <Link className="hamburger" to='/shop'> SHOP </Link>
                                <Link className="hamburger" to='/about'> ABOUT </Link>
                                <Link className="hamburger" to='/login'> SIGN IN </Link>
                            </div>
                        </div>   
                        
                        <li>
                            <Toggle 
                            defaultChecked={checked}
                            checked={checked===true ? true : false}
                            onChange={checked=== true ? ()=>{setChecked(!checked); stop()} : () => {setChecked(!checked); play() }}
                            >
                            </Toggle>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarSite;