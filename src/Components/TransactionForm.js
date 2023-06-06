import { useState } from "react";
import styles from "../CSS/transActionForm.module.css";

const TransactionForm = ({ addNewTransaction }) => {
  const [formValues, setFormValue] = useState({
    amount: 0,
    desc: "",
    type: "expense",
  });
  // save input value
  const changeHandler = (e) => {
    setFormValue({ ...formValues, [e.target.name]: e.target.value });
  };
  // add New Transition & reset form
  const submitTransaction = (e) => {
    e.preventDefault();
    addNewTransaction(formValues);
    setFormValue({
      amount: 0,
      desc: "",
      type: "expense",
    });
  };
  return (
    <form action={""} onSubmit={submitTransaction}>
      <div className={styles.detailsAction}>
        <input
          type="text"
          name="desc"
          placeholder="Description"
          value={formValues.desc}
          onChange={changeHandler}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={parseFloat(formValues.amount)}
          onChange={changeHandler}
        />
      </div>
      <div className={styles.radiosAction}>
        <input
          type="radio"
          name="type"
          value="expense"
          checked={formValues.type === "expense"}
          onChange={changeHandler}
        />
        <label>Expense</label>
        <input
          type="radio"
          name="type"
          value="income"
          checked={formValues.type === "income"}
          onChange={changeHandler}
        />
        <label>Income</label>
      </div>
      <button type="submit">ADD Transaction</button>
    </form>
  );
};

export default TransactionForm;
