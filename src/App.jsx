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
        <div className=" bg-zinc-800 p-10 rounded-lg flex">
          <div className="">
            <Header />
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>

          <div>
            <TransactionList />
          </div>
         
          
        </div>       
      </div>
       
      
     
     </GlobalProvider>
      
  )
}

export default App
