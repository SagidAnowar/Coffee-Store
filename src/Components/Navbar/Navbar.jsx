import "./Navbar.scss";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Cart } from "../../Assets/Cart.svg";
import { ReactComponent as Logo } from "../../Assets/Morning Aroma.svg";
import Toggle from 'react-toggle'
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = () => {

    const [scroll, setScroll] = useState(false);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 60)
        })
    }, []);

    return (
        <nav className="HomePage-NavBar" style={ scroll ? {backgroundColor:"#282828", padding: "7px 30px"} : {backgroundColor:"transparent"} }>
            <div className="NavBar-Container">
                <div>
                    <Link className="Navbar-Title" to ="/"><Logo style={ {width: "150px", zIndex: "3", position: "relative"} }/></Link>
                </div>

                <div>
                    <ul>
                        <li>
                            <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/"> HOME
                            </Link>
                        </li>
                        <li>
                            <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/shop">
                                SHOP
                            </Link>
                        </li>
                        <li>
                            <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/about">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                        {user === null ? null : <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} onClick={handleLogout} to="/">
                                LOG OUT
                            </Link>
                            }
                        </li>
                        <li>
                            {user === null ? <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/login">
                                SIGN IN
                            </Link> : <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/account">
                                ACCOUNT
                            </Link>
                            }
                        </li>
                        <li>
                            <Hamburger  toggled={isOpen} toggle={setOpen} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;