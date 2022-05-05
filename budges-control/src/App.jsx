// presupuesto - budget
// gastos - expenses
import { useState, useEffect } from 'react'
import Header from './components/Header'
import ExpensesList from './components/ExpensesList'
import Modal from './components/Modal'
import { generateId } from './helpers'
import NewExpenseIcon from './img/nuevo-gasto.svg'


function App() {
  const [expenses, setExpenses] = useState([])
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [editExpense, setEditExpense] = useState({})

  useEffect(() => {
    if(Object.keys(editExpense).length > 0) {
      console.log('gasto editar tiene algo');
      setModal(true)

      setTimeout(() => {
        setAnimateModal(true);
        console.log('namate modal');
      }, 500);
    }
  }, [editExpense])



  const handleNewExpense = () => {
    console.log('handleNewExpense, add new expense');
    setModal(true)
    setEditExpense({})

    setTimeout(() => {
      setAnimateModal(true);
      console.log('namate modal');
    }, 500);
  }

  // guardar gasto
  const saveExpense = expense => {
    expense.id = generateId();
    expense.date = Date.now();
    setExpenses([...expenses, expense])
    console.log("saveExpense...",expense);

    setAnimateModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ExpensesList
              expenses={expenses}
              setEditExpense={setEditExpense}
            />
          </main>

          <div className="nuevo-gasto">
            <img
              src={NewExpenseIcon}
              alt="New Expense Icon"
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}

      {modal &&
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
          editExpense={editExpense}
      />}


    </div>
  )
}

export default App
