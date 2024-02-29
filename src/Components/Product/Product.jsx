import "./Product.scss";
import arrow from "../../Assets/next.png";
import image from "../../Assets/Coffee_brown.png";
import image2 from "../../Assets/Coffee_green.png";
import image3 from "../../Assets/Coffee_red.png";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CoffeeData from "../../Data/products";
import Card from "../Card/Card";
import { addProduct } from "../../Redux/cartRedux";
import { useDispatch } from "react-redux";

const Product = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [number, setNumber] = useState(1);
    const [grind, setGrind] = useState("Whole Bean");
    const state = location.state.coffee;
    let type = location.state.coffee.category;
    

    let ImageCard;

    if (type === "Dark Roast") {
        ImageCard = <img alt="coffee" src={image2} className="Coffee-Image-Product"/>;
    } else if (type === "Light Roast") {
        ImageCard = <img alt="coffee" src={image3} className="Coffee-Image-Product"/>;
    } else {
        ImageCard = <img alt="coffee" src={image} className="Coffee-Image-Product"/>;  
    }

    const imageColor = ImageCard.props.src; 

    const handleChange = (event) => {
        setNumber(event.target.value)
    }
    const handleChangeGrind = (event) => {
        setGrind(event.target.value)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    state["bean"] = grind;
    state["photo"] = imageColor;
    state["quantity"] = number;
    state["total"] = state.price*number;

    const handleClick = () => {
        dispatch(addProduct({ product:state, quantity:state.quantity }))
    }

    return (
        <section className="Product-section">
            <div className="Product-div">
                <h5 className="Product-info-tag">Home</h5>
                <img alt="arrow" className="arrow-right" src={arrow}></img>
                <h5 className="Product-Tag">{state.name}</h5>
            </div>

            <div className="Product-image-info">
                {ImageCard}
                <div  className="product-buy-info" style={{display:"flex",flexDirection:"column"}}>
                    <h3>Morning Aroma</h3>
                    <h1>{state.name}</h1>
                    <span className="price">${state.price}</span>
                    <p>{state.description}</p>
                    <div className="input-select-info" style={{display:"flex"}}>
                        <div className="input-select-info-choice">
                            <label for="Coffee">Grind</label>

                            <select name="Coffee-Grind" id="grind" value={grind} onChange={handleChangeGrind}>
                                <option value="Whole Bean">Whole Bean</option>
                                <option value="French Press">French Press</option>
                                <option value="Turkish">Turkish</option>
                                <option value="Stove Top Express">Stove Top Express</option>
                            </select>

                            <label className="coffee-quantity" for="Coffee">Quantity</label>
                            <input type="number" id="number" min="1" value={number} onChange={handleChange}></input>
                        </div>

                        <div className="button-divs">
                            <Link 
                                onClick={handleClick} 
                                className="add-to-cart-button" 
                                type="submit" 
                                to="/shop/Cart" 
                                state={{
                                    product: state,
                                    quantity: number,
                                    photo: imageColor,
                                    bean: grind 
                                }}
                            >
                                <span className="Add-to-cart">Add to Cart</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Product-recommendation">
                <h2 className="recommendation-tag">You may also like</h2>
                <div className="CardList-recommended">
                    {CoffeeData.coffees.slice(0, 4).map((coffee, index) => (
                        <Card key={index} coffee={coffee}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Product;