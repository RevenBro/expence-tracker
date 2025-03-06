import React from 'react'

const TransactionCell = ({ payload }) => {
  return (
    <div
      className={`flex flex-row py-2.5 px-[15px] text-[14px] rounded-[2px] items-center font-normal justify-between border-r-[4px] border-solid ${
        payload?.type === "EXPENSE" ? "border-red-500" : "border-green-500"
      }`}
    >
      <span>{payload.description}</span>
      <span>${payload.amount}</span>
    </div>
  );
};


const Transaction = ({ transaction }) => {
  return (
    <div className='flex flex-col items-center py-2.5 px-[22px] text-[18px] w-full gap-2.5 font-bold '>
      <h1>Transaction</h1>
      <input className='py-2.5 px-[12px] rounded-[12px] bg-[#e6e8e9] border-[1px] border-solid border-[#e6e8e9] outline-none' type="text" placeholder='Search'/>

      {transaction?.length ? transaction.map((payload) => <TransactionCell payload={payload}/>) : ""}
    </div>
  )
}

export default Transaction