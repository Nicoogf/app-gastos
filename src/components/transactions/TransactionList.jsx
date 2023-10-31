import React from 'react';
import { useGlobalState } from "../../context/GlobalState";

const TransactionList = () => {
  const { transactions ,  deleteTransaction} = useGlobalState();
  return (
    <div>
      {
        transactions.map(transaction => (
          <div key={ transaction.id }>
            <p>{transaction.description}</p>
            <p>{transaction.amount}</p>
            <button onClick={() =>  deleteTransaction(transaction.id)} className='bg-red-500 px-3 py-1'> Eliminar Transaccion</button>
          </div>
        ))
      }
    </div>
  )
}

export default TransactionList;
