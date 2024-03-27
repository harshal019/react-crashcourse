import Item from "./Item";

const foodItems=['Dal',"Green Vegetable","Roti","Salad","Milk","Ghee" ];


const FoodItems =({items}) =>{
    return(
        <ul className="list-group">
        { items.map( (item)=>(
         <Item  key={item} foodItem={item}/>
        ))}
        
      </ul>
    ); 

};

export default FoodItems;