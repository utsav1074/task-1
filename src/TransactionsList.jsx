import React from "react";
import { transactions } from "./TransactionsData";
import "./TransactionsList.css"; // import the CSS file

const TransactionsList = () => {
  return (
    <div className="transactions-container">
      <table className="transactions-table">
        <thead>
          <tr className="transactions-header">
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Type</th>
            <th>Amount (Rs.)</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id}>
              <td>{txn.id}</td>
              <td>{txn.date}</td>
              <td className={txn.type === "Credit" ? "credit" : "debit"}>{txn.type}</td>
              <td>{txn.amount}</td>
              <td>{txn.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsList;
