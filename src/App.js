
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Meat",
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
    {
      id: "e3",
      title: "House Rent",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 420,
      date: new Date(2022, 5, 12),
    },
  ];
    const addExpenseHandler = expense => {
      console.log(expense);
    };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
