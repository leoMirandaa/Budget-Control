import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const BudgetControl = ({expenses, setExpenses, budget, setBudget, setIsValidBudget}) => {

  const [percentage, setPercentage] = useState(0)
  const [enable, setEnable] = useState(0)
  const [expensed, setExpensed] = useState(0)

  useEffect(() => {
    const totalExpensed = expenses.reduce((total, expense) => total + expense.quantity, 0)

    const totalEnable = budget - totalExpensed

    //calculate percentage expensed
    const newPercentage = (( (budget - totalEnable) / budget) * 100).toFixed(2);

    setExpensed(totalExpensed)
    setEnable(totalEnable)

    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1000);

  }, [expenses])


  const quantityFormat = (quantity) => {
    return quantity.toLocaleString('en-US', {
      style:'currency',
      currency: 'USD'
    })
  }

  const handleResetApp = () => {
    const result = confirm('Do you want to restart budget and expenses?')

    if(result) {
      setExpenses([])
      setBudget(0)
      setIsValidBudget(false)
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}% Expensed`}

          styles={buildStyles({
            pathColor: percentage > 100 ? '#DC2626' :'#3B82F6',
            trailColor: '#F5F5F5',
            textColor: percentage > 100 ? '#DC2626' :'#3B82F6'
          })}
        />
      </div>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Reset App
        </button>
        <p>
          <span>Budget: </span> {quantityFormat(budget)}
        </p>

        <p className={`${enable < 0 ? 'negativo': ''}`}>
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