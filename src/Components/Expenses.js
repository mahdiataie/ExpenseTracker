import './Expenses.css'
import ExpenseItem from './ExpenseItem';


function Expenses(props){
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



return (
    <div className='expenses'>
    <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
</div>


);


}

export default Expenses;