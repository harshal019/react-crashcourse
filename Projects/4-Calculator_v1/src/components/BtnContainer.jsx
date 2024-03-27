import React from 'react'
import styles from "./BtnContainer.module.css";


const BtnContainer = () => {

    const btnNames=[
        'C','1','2','+','3','4','-',
        '5','6','*','7','8','/','=',
        '9','0','.'
    ]

  return (
    <div className={styles.btnContainer}>
        {btnNames.map((btn)=>
            <button className={styles.button}>{btn}</button>
        )}

        
        
      </div>
  )
}

export default BtnContainer