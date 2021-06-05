import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const incomesTotal = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, val) => {
      return (acc += val);
    }, 0)
    .toFixed(2);

  const expensesTotal = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, val) => {
      return (acc -= val);
    }, 0)
    .toFixed(2);

  console.log(expensesTotal, incomesTotal);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${incomesTotal}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expensesTotal}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
