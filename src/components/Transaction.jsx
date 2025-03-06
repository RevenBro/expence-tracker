import React, { useEffect, useState } from 'react'

const TransactionCell = ({ payload }) => {
  return (
    <div
      className={`flex flex-row py-2.5 px-[15px] text-[14px] rounded-[2px] items-center font-normal justify-between border-r-[4px] border-solid w-full border-[1px] border-[#e6e8e9] ${
        payload?.type === "EXPENSE" ? "border-r-red-500" : "border-r-green-500"
      }`}
    >
      <span>{payload.description}</span>
      <span>${payload.amount}</span>
    </div>
  );
};


const Transaction = ({ transaction }) => {
  const [filteredTransaction, setFilteredTransaction] = useState(transaction);
  const [searchText, setSearchText] = useState("");

  const filterData = (searchText) => {
    if(!searchText || !searchText.trim().length) {
      setFilteredTransaction(transaction);
      return;
    };
    let txn = [...transaction];
    txn = txn.filter((payload) => payload.description.toLowerCase().includes(searchText.toLowerCase().trim()));
    setFilteredTransaction(txn);
  };
  useEffect(() => {
    filterData(searchText)
  }, [transaction])
  return (
    <div className='flex flex-col items-start pb-2.5 px-[22px] text-[18px] w-full gap-2.5 font-bold '>
      <h1>Transaction</h1>
      <input value={searchText} onChange={(e) => {setSearchText(e.target.value); filterData(e.target.value)}} className='py-2.5 w-full px-[12px] rounded-[12px] bg-[#e6e8e9] border-[1px] border-solid border-[#e6e8e9] outline-none' type="text" placeholder='Search'/>

      {filteredTransaction?.length ? filteredTransaction.map((payload) => <TransactionCell payload={payload}/>) : ""}
    </div>
  )
}

export default Transaction