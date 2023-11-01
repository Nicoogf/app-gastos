import { useGlobalState } from "../../context/GlobalState";
import { TransactionItem } from "./TransactionItem"

const TransactionList = () => {
  const { transactions } = useGlobalState();
  return (

    <>
    <h3 className='font-bold text-xl text-white block w-full'> Historial  </h3>
    <ul>

      {
        transactions.map( (transaction) => (
          <TransactionItem transaction={transaction} key={ transaction.id } />
        ))
      }

    </ul>
      
    </>
  )
}

export default TransactionList;
