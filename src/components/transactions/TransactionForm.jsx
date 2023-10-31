import React, { useState } from 'react' ;
import { useGlobalState } from "../../context/GlobalState" ;

const TransactionForm = () => {
  const { addTransaction }  = useGlobalState()
  const [ description , setDescription] = useState() ;
  const [ amount , setAmount ] = useState( 0 ) ;

  const onSubmit = (e) => {
    e.preventDefault() ;
    addTransaction({
      id: window.crypto.randomUUID() ,
      description,
      amount: + amount
    })
    console.log( description , amount )
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Ingresar Movimiento' onChange={(e)=> setDescription(e.target.value)}/>
        <input type="number" placeholder='00.00' step="00.1" onChange={(e)=> setAmount(e.target.value)}/>
        <button> Guardar Movimiento </button>
      </form>
    </div>
  )
}

export default TransactionForm