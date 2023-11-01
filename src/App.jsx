import { GlobalProvider } from "./context/GlobalState" ;
import Header from "./components/Header" ;
import TransactionForm from "./components/transactions/TransactionForm";
import Balance from "./components/Balance";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {


  return (
   
     <GlobalProvider>
      
     
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
       
       <div className="container w-2/6 flex items-center">
    
       <div className=" bg-zinc-800 p-10 rounded-lg flex gap-x-2 ">
      
          <div className="">
          <h1 className="text-4xl font-bold">Gestor de Gastos</h1>
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>

          <div className="w-full">
            <TransactionList />
          </div>
         
          
       </div> 

       </div>    

      </div>
       
      
     
     </GlobalProvider>
      
  )
}

export default App
