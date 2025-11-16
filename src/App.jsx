import React from "react";
import TransactionsList from "./TransactionsList";
import Tree from "./Tree"; // ✅ make sure Tree is imported

function App() {
  return (
    <div className="app-container" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Recent Transactions</h1>
      <TransactionsList />

      {/* Added Tree below the transactions */}
      <div style={{ marginTop: "40px", padding: 20, fontFamily: "Arial" }}>
        <Tree />
      </div>
    </div>
  );
}

export default App;
