import React, { useState } from 'react'


const AddTransactionComponent = ({setIsAddVisible, addTransaction}) => {
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [type, setType] = useState("EXPENSE");

  const AddTransaction = () => {
    addTransaction({amount:Number(amount), description, type, id:Date.now()});
    setIsAddVisible();
  };
  return (
    <div className='w-full flex flex-col border-[1px] border-solid border-[#e6e8e9] gap-2.5 py-3.5 px-3.5 m-5 rounded-[4px]'>
      <input className='outline-none py-2.5 px-3 rounded-[4px] border-[1px] border-solid border-[#e6e8e9]' type="number" placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
      <input className='outline-none py-2.5 px-3 rounded-[4px] border-[1px] border-solid border-[#e6e8e9]' type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}/>

      <div className='flex flex-row  w-full items-center justify-center gap-3'>
        <input type="radio" id='expense' name='type' value="EXPENSE" checked={type === "EXPENSE"} onChange={(e) => setType(e.target.value)}/>
        <label htmlFor="expense">Expense</label>
        <input type="radio" id='income' name='type' value="INCOME" checked={type === "INCOME"} onChange={(e) => setType(e.target.value)}/>
        <label htmlFor="income">Income</label>
      </div>

      <div onClick={AddTransaction} className='bg-black hover:bg-neutral-700 cursor-pointer text-white py-1 px-2.5 rounded-[4px] text-center font-bold text-[15px]'>Add Transaction</div>
    </div>
  )
}

const Overview = ({addTransaction}) => {
  const [isAddVisible, setIsAddVisible] = useState(false);

  return (
    <div className='flex flex-col items-center m-2.5 w-full'>
      <div className='flex justify-between items-center gap-20 w-full'>
        <span className='text-[18px]'>Balance: $10.000</span>
        <button
          onClick={() => setIsAddVisible(!isAddVisible)}
          className='bg-black text-white hover:bg-neutral-600 py-1.5 px-2.5 rounded-[4px] cursor-pointer font-bold text-[15px]'
        >
          {isAddVisible ? 'Hide' : 'Add'}
        </button>
      </div>

      {isAddVisible && <AddTransactionComponent setIsAddVisible={setIsAddVisible} addTransaction={addTransaction}/>}
      <div className='flex flex-row gap-3 m-5 w-full justify-between'>
        <div className='flex flex-col w-[48%] rounded-[4px] border-[1px] border-solid border-[#e6e8e9] py-[15px] px-5  text-[14px]'>
          Expense <span className={`font-bold text-[20px] text-green-500`}>$1.000</span>
        </div>
        <div className='flex flex-col rounded-[4px] border-[1px] border-solid border-[#e6e8e9] py-[15px] px-5 w-[48%] text-[14px]'>
          Income <span className={`font-bold text-[20px] text-red-500`}>$5.000</span>
        </div>
      </div>
    </div>
  )
}

export default Overview;
