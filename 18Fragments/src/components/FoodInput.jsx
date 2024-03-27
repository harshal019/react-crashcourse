import styles from './FoodInput.module.css'; 

const FoodInput = () => {

    const handlerOnChange=(event)=>{
        console.log(event.target.value);
    };
  return (
    <input type="text" 
    placeholder="Enter food item..."
    className='{styles.foodInput}'
    onChange={handlerOnChange} />
  );
};

export default FoodInput;
