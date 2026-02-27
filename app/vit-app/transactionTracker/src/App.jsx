import { useState } from "react";
import Form from "./Components/Form";
import TransactionList from "./Components/Transaction-list";
import { sum } from "./Utils";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  const { income, expense } = sum(transactions);

  return (
    <div>
      <h1>Expense Tracker</h1>

      <h3>Total Income: {income}</h3>
      <h3>Total Expense: {expense}</h3>

      <Form addTransaction={addTransaction} />

      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;