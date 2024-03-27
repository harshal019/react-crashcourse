import styles from "./App.module.css";
import BtnContainer from "./components/BtnContainer";
import Display from "./components/Display";

function App() {

  return (
    <div className={styles.calculator}>

      <Display/>

      <BtnContainer/>


    </div>
    
  )
}

export default App;
