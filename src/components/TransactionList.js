import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  return (
    <>
      <ul className="list">
        {transactions.map((transaction) => {
          return <Transaction transaction={transaction} />;
        })}
      </ul>
    </>
  );
};

export default TransactionList;
