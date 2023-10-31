import { useGlobalState } from "../context/GlobalState" ;


const Balance = () => {

  const { transactions }  = useGlobalState() ;

  const amounts = transactions.map( transactions => transactions.amount)

  const total = amounts.reduce((acc, item) => (acc += item) , 0)

 
  
  return (
    <div>
      
      <h1>Balance</h1>

      <h3> $ { total } </h3>
        
    </div>
  )
}

export default Balance