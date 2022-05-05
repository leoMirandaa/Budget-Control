import { useState, useEffect } from "react"

const BudgetControl = ({expenses, budget}) => {

  const [enable, setEnable] = useState(0)
  const [expensed, setExpensed] = useState(0)

  useEffect(() => {
    const totalExpensed = expenses.reduce((total, expense) => total + expense.quantity, 0)

    const totalEnable = budget - totalExpensed
    setExpensed(totalExpensed)

    setEnable(totalEnable)
  }, [expenses])


  const quantityFormat = (quantity) => {
    return quantity.toLocaleString('en-US', {
      style:'currency',
      currency: 'USD'
    })
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <p>chart here</p>

      <div className="contenido-presupuesto">
        <p>
          <span>Budget: </span> {quantityFormat(budget)}
        </p>
        <p>
          <span>Available: </span> {quantityFormat(enable)}
        </p>
        <p>
          <span>Spent: </span> {quantityFormat(expensed)}
        </p>
      </div>
    </div>
  )
}

export default BudgetControl