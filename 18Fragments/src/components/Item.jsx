import styles from "./Item.module.css";
const Item = ({foodItem}) => {

    const handlerBuyBtn= (event)=>{
      console.log(event);
      console.log(`${foodItem} button clicked.`);
    };
    // let {foodItem}=props; //deconstructiong the object that pass
  return (
   <>
         <li className={` ${styles["kg-item"]} list-group-item`} >
               <span className={ styles["kg-span"]}>{foodItem} </span>

               <button className="{`${styles.button} btn btn-info `}"
                onClick={(event)=>handlerBuyBtn(event)}
                > Buy</button>

               
          </li>
   </>
  )
}

export default Item