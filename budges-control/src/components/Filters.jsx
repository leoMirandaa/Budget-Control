import { useState, useEffect} from 'react'

const Filters = ({filter, setFilter}) => {
  return (
    <div className='filtros sombra contenedor'>
      <form action="">
        <div className="campo">
          <label htmlFor="">Filter Expenses</label>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">-- All categories --</option>
            <option value="save">Save(ahorro)</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="expenses">Some Expenses(gastos varios)</option>
            <option value="hobbie">Hobbie</option>
            <option value="health">Health</option>
            <option value="Subscriptions">Subscriptions</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filters