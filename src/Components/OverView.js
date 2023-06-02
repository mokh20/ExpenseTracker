import { useState } from "react";
import styles from "../CSS/overView.module.css";
import TransactionForm from "./TransactionForm";

const OverView = ({ income, expense, addNewTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <h5>Balance : {income - expense}$</h5>
        <button onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? "Cancel" : "ADD"}
        </button>
      </div>
      {isShow && <TransactionForm addNewTransaction={addNewTransaction} />}
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
