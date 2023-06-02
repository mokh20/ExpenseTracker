import styles from "../CSS/transactions.module.css";
const Transactions = ({ transactions }) => {
  return (
    <div className={styles.transactions}>
      <h3>Transactions</h3>
      <input type="search" name="" id="" placeholder="Search" />
      <section className={styles.transactionList}>
        {transactions.map((t) => {
          return (
            <section className={styles.transactionItem}>
              <div key={t.id}>{t.desc}</div>
              <span
                className={
                  t.type === "expense" ? styles.expense : styles.income
                }
              >
                {t.amount} $
              </span>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default Transactions;
