import TransactionItem from "./Transaction-item";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <ul>
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </ul>
  );
}

export default TransactionList;