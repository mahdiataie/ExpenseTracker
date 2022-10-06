import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [selectedItem, setSelectedItem] = useState("2022");

  const downSelectHandler = (selectedYear) => {
    setSelectedItem(selectedYear);
    console.log(selectedYear);
  };

  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedItem;
  });


  
  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedItem}
        onSelectedChange={downSelectHandler}
      />
      <ExpenseChart expenses={filteredYear}/>
      <ExpensesList items ={filteredYear}/>
    </Card>
  );
}

export default Expenses;
