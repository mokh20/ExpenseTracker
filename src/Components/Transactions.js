import { useEffect, useState } from "react";
import styles from "../CSS/transactions.module.css";
const Transactions = (props) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTransaction, setFilteredTransaction] = useState(
    props.transactions
  );
  const filterTransactionHandler = (search) => {
    if (!search || search === "") {
      setFilteredTransaction(props.transactions);
      return;
    }
    const filtered = props.transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTransaction(filtered);
  };

  const searchHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactionHandler(e.target.value);
  };

  useEffect(() => {
    filterTransactionHandler(searchItem);
  }, [props.transactions]);

  return (
    <div className={styles.transactions}>
      <h3>Transactions</h3>
      <section className={styles.transactionList}>
        <input
          type="search"
          placeholder="Search"
          value={searchItem}
          onChange={searchHandler}
        />
        {filteredTransaction.map((t) => {
          return (
            <section
              key={t.id}
              className={styles.transactionItem}
              style={{
                borderRight:
                  (t.type === "expense" && "4px solid red") ||
                  "4px solid green",
              }}
            >
              <div>{t.desc}</div>
              <span>{t.amount} $</span>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default Transactions;
