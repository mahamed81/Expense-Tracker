import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/Filter/ExpenseFilter';


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      
    }
  ];


  const saveDataHandler = data=>{
    return data;
  }

  return (
    <div>
     <NewExpense onExpense = {saveDataHandler}/>
     <ExpenseFilter></ExpenseFilter>
      <Expense list = {expenses}/>
      
    </div>
  );
}

export default App;