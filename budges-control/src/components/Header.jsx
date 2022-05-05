import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'

const Header = ({
  expenses,
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget
}) => {
  return (
    <header>
      <h1>Expenses control</h1>

      {isValidBudget
        ?
          <BudgetControl
            expenses={expenses}
            budget={budget}
          />
        :
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      }
    </header>
  )
}

export default Header