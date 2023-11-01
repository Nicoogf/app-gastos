import React from 'react'
import { useGlobalState } from '../../context/GlobalState';

export function TransactionItem  ( { transaction} ) {
    const { deleteTransaction } = useGlobalState();
  return (
    
        <li key={ transaction.id } className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center gap-2'>
            <p>{transaction.description}</p>

            <div className='flex flex-row gap-2'>
                <span>{transaction.amount}</span>
                <button onClick={() =>  deleteTransaction(transaction.id)} className='bg-red-500 px-2'> X</button>
            </div>
           
        </li>
    
  )
}

export default TransactionItem