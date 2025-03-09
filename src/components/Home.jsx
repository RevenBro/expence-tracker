import { useEffect, useState } from "react"
import Overview from "./Overview"
import Transaction from "./Transaction"

const Home = () => {
  const [transaction, setTransaction] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const addTransaction = (payload) => {
    const transactionArr = [...transaction];
    transactionArr.push(payload);
    setTransaction(transactionArr);
  };

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transaction.map((payload) => {
      payload.type === "EXPENSE" ? exp = exp + payload.amount : inc = inc + payload.amount;
    });
    setExpense(exp);
    setIncome(inc);
  };

  useEffect(() => {
    calculateBalance();
  }, [transaction])
  return (
    <div>
      <h1 className="w-[360px] text-black text-[25px] font-bold">Expense Tracker App</h1>
      <div className="flex flex-col items-center mt-6 mb-2.5">
        <div>
          <Overview addTransaction={addTransaction} expense={expense} income={income}/>
          <Transaction transaction={transaction}/>
        </div>
      </div>
    </div>
  )
}

export default Home