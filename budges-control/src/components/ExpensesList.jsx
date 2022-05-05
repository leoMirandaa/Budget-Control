import Expense from './Expense'

const ExpensesList = ({expenses, setEditExpense}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? 'Expenses: ' : 'There isnt expenses yet'}</h2>

      {expenses.map( expense => (
        <Expense
          key={expense.id}
          expense={expense}
          setEditExpense={setEditExpense}
        />
      ))}

    </div>
  )
}

export default ExpensesList
