import { useState } from "react";
import styles from "../CSS/overView.module.css";
import TransActionForm from "./TransActionForm";

const OverView = ({ income, expense, addNewTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  const balance = income - expense;
  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <h5 style={{ color: balance < 0 ? "red" : "green" }}>
          Balance : {balance}$
        </h5>
        <button
          className={isShow ? styles.cancel : styles.add}
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isShow ? "Cancel" : "ADD"}
        </button>
      </div>
      {isShow && <TransActionForm addNewTransaction={addNewTransaction} />}
      <div className={styles.calculate}>
        <div className={styles.expense}>
          <span>Expense</span>
          <p>{expense}$</p>
        </div>
        <div className={styles.income}>
          <span>Income</span>
          <p>{income}$</p>
        </div>
      </div>
    </div>
  );
};

export default OverView;
