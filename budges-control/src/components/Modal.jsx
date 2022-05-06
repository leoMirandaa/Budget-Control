import { useState, useEffect } from 'react'
import Message from './Message'
import CloseBtn from '../img/cerrar.svg'

const Modal = ({setModal, animateModal, setAnimateModal, saveExpense, editExpense, setEditExpense}) => {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    if(Object.keys(editExpense).length > 0) {
      console.log('gasto editar tiene algo');
      setName(editExpense.name)
      setQuantity(editExpense.quantity)
      setCategory(editExpense.category)
      setId(editExpense.id)
      setDate(editExpense.date)
    }
  }, [])


  const hideModal = () => {
    setAnimateModal(false)
    setEditExpense({})

    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if( [name, quantity, category].includes('')){
      setMessage('All fields are required')

      setTimeout(() => {
        setMessage('')
      }, 3000);
      return
    }

    saveExpense({name, quantity, category, id, date})
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CloseBtn}
          alt="close modal"
          onClick={hideModal}
        />
      </div>


      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? "animar": "cerrar"} `}
      >
          <legend>{editExpense.name ? 'Edit Expense' : 'New Expense'}</legend>

          {message && <Message type="error">{message}</Message>}

          <div className="campo">
            <label htmlFor="name">Expense Name</label>
            <input
              id="name"
              type="text"
              placeholder="Add the expenses name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="quantity">Quantity</label>
            <input
              id="quantity"
              type="number"
              placeholder="Add expense quantity. ex 300"
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
            />
          </div>

          <div className="campo">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="save">Save(ahorro)</option>
              <option value="food">Food</option>
              <option value="home">Home</option>
              <option value="expenses">Some Expenses(gastos varios)</option>
              <option value="hobbie">Hobbie</option>
              <option value="health">Health</option>
              <option value="Subscriptions">Subscriptions</option>
            </select>
          </div>

          <input
            type="submit"
            value={editExpense.name ? 'Save Changes' : 'New Expense'}/>
        </form>
    </div>
  )
}

export default Modal