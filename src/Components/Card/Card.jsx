import "./Card.scss";
import image from "../../Assets/Coffee_brown.png";
import image2 from "../../Assets/Coffee_green.png";
import image3 from "../../Assets/Coffee_red.png";
import { Link } from "react-router-dom";

const Card = ( {coffee} ) => {
    let type = coffee.category;
    let ImageCard;

    if (type === "Dark Roast") {
        ImageCard = <img alt="coffee" style={{width:"260px"}} src={image2}></img>;
    } else if (type === "Light Roast") {
        ImageCard = <img alt="coffee" style={{width:"260px"}} src={image3}></img>;
    } else {
        ImageCard = <img alt="coffee" style={{width:"260px"}} src={image}></img>;  
    }

    return (
        <div className="Card">
            <Link style={{textDecoration:"none"}} to={`/shop/${coffee.name.replace(/ /g, '-')}`} state={{coffee}}> 
                {ImageCard}
                <div className="Product-info">
                    <h4>{coffee.name}</h4>
                    <p>${coffee.price}</p>
                </div>
            </Link> 
        </div>
    )
}

export default Card;