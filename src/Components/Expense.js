import { useEffect, useState } from "react";
// import styles from "../CSS/expense.module.css";
import Transactions from "./Transactions";
import OverView from "./OverView";

const Expense = () => {
  // States
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addNewTransaction = (formValues) => {
    console.log(formValues);
    // get transaction & set id
    const data = { ...formValues, id: Date.now() };
    setTransactions([...transactions, data]);
  };
  useEffect(() => {
    let inc = 0;
    let exp = 0;
    transactions.forEach((t) => {
      t.type === "expense"
        ? (exp += parseInt(t.amount))
        : (inc += parseInt(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);
  return (
    <div>
      <OverView
        income={income}
        expense={expense}
        addNewTransaction={addNewTransaction}
      />
      <Transactions transactions={transactions} />
    </div>
  );
};

export default Expense;
