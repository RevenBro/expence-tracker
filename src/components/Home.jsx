import { useState } from "react"
import Overview from "./Overview"
import Transaction from "./Transaction"

const Home = () => {
  const [transaction, setTransaction] = useState([]);

  const addTransaction = () => {
    const transactionArr = [...transaction];
    transactionArr.push(payload);
    setTransaction(transactionArr);
  };
  return (
    <div>
      <h1 className="text-black text-[25px] font-bold w-[360px]">Expense Tracker</h1>
      <div className="flex flex-col items-center mt-7 mb-2.5">
        <div>
          <Overview addTransaction={addTransaction}/>
          <Transaction transaction={transaction}/>
        </div>
      </div>
    </div>
  )
}

export default Home