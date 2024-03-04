import "./navbar.scss";
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../Assets/Morning Aroma.svg";
import { ReactComponent as Cart} from "../../Assets/Cart.svg";
import Toggle from 'react-toggle'
import { Sling as Hamburger } from 'hamburger-react'
import MusicContext from "../../Context/musicContext";
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from "../../Redux/userRedux";
import { Badge } from "@mui/material";
import axios from "axios";


const Navbar = () => {

    const {play, stop, checked, setChecked} = useContext(MusicContext);
    const [scroll, setScroll] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const user = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const quantity = useSelector(state => state.cart.quantity);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 60);
        });
      }, []);

    const handleLogout = async () => {
        try{
            const order = await axios.get("https://morning-aroma.herokuapp.com/api/auth/logout");
            dispatch(logOut());
            console.log(order)
        }
        catch(err){
            console.log(err)
        }
    };

    return (
        <nav className="HomePage-NavBar" style={ scroll ? {backgroundColor:"#282828", padding: "7px 30px"} : {backgroundColor:"transparent"} }>
            <div className="NavBar-Container">
                <div>
                    <Link className="Navbar-Title" to ="/"><Logo style={ {width: "150px", zIndex: "3", position: "relative"} }/></Link>
                </div>

                <div>
                    <ul>
                        <li>
                            <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/">HOME</Link>
                        </li>
                        <li>
                            <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/shop">SHOP</Link>
                        </li>
                        <li>
                            <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/about">ABOUT</Link>
                        </li>
                        <li>
                            {user === null 
                            ? null 
                            : <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} onClick={handleLogout} to="/">LOG OUT</Link>}
                        </li>
                        <li>
                            {user === null 
                            ? <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/login">SIGN IN</Link> 
                            : <Link className={scroll ? "Navbar-Links" : "Navbar-Links-Scroll"} to="/account">ACCOUNT</Link>
                            }
                        </li> 

                        <li>
                            <Hamburger  toggled={isOpen} toggle={setOpen} />
                        </li>

                        <div className='hamburger-section' style={isOpen? {top:(user != null ? "30px" :"0px")}: {top: "-295px"}}>
                            <div className="hamburger-container" >
                                <Link className="hamburger" to='/'> HOME </Link>
                                <Link className="hamburger" to='/shop'> SHOP </Link>
                                <Link className="hamburger" to='/about'> ABOUT </Link>
                                {user === null 
                                    ? null 
                                    : <Link   className="hamburger" onClick={handleLogout} to='/'> LOG OUT </Link>}
                                {user === null 
                                    ? <Link   className="hamburger" to='/login'> SIGN IN </Link>
                                    : <Link   className="hamburger" to='/account'> ACCOUNT </Link> }
                            </div>
                        </div>   
                        
                        <li>
                            <Toggle 
                            defaultChecked={checked}
                            checked={checked ===true ? true : false}
                            onChange={checked === true 
                                ? ()=>{setChecked(!checked); stop()} 
                                : () => {setChecked(!checked); play() }}
                            >
                            </Toggle>
                        </li>
                        
                        <li>
                            <Link to="/shop/Cart" >
                                <Badge badgeContent={quantity} color="success">
                                    <Cart className="Cart-Logo"/>
                                </Badge>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;