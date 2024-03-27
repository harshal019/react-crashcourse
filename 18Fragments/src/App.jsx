import { ErrorMsg } from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";
import "./App.css";
import FoodInput from "./components/FoodInput";
function App() {
 
   const foodItems=['Dal',"Green Vegetable","Roti","Salad","Milk","Ghee" ];
  // let foodItems=[];

  // let emptyItems=foodItems.length === 0 ? "I am still hungry" :null

  // if(foodItems.length === 0){
  //   return <h3>I am still hungry</h3>;
  // }
  


  return (
    <div className="container">
        <h1> Healthy Food </h1>
        <FoodInput/>
        <ErrorMsg items= {foodItems}/>
        <FoodItems items= {foodItems} />
    </div>
  )
}

export default App
