import CoffeeData from "../../Data/products"
import Card from "../Card/Card"
import "./CardList.scss";
import { useState, useEffect } from 'react'


const Cardlist = ({ name, sorted }) => {
  const [list, setList] = useState(
    CoffeeData.coffees.filter(coffee =>{
      return (coffee.category === name);
    }).map((coffee,index) =>(
      <Card key={index} coffee={coffee}/>
    ))
  )
  
  useEffect(()=>{
       
    if(sorted==="Price, high to low"){ 
      return  setList([...list].sort((a, b) => parseFloat(b.props.coffee.price) - parseFloat(a.props.coffee.price)))
    }else if (sorted==="Price, low to high") {
      return setList([...list].sort((a, b) => parseFloat(a.props.coffee.price) - parseFloat(b.props.coffee.price)))
    }else if (sorted==="Alphabetically, A-Z") {
      return setList([...list].sort((a,b) => (a.props.coffee.name.localeCompare(b.props.coffee.name))))
    }else if (sorted==="Alphabetically, Z-A") {
      return setList([...list].sort((a,b) => (a.props.coffee.name.localeCompare(b.props.coffee.name))).reverse())}
    else return setList(CoffeeData.coffees.filter(coffee =>{
        return (coffee.category === name);
    }).map((coffee,index) =>(
        <Card key={index} coffee={coffee}/>
    )));
  },[sorted]);

  return (

    <div className="CardList">
      {list}
    </div>

  )
}

export default Cardlist