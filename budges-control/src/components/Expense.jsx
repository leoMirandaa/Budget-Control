import React from 'react'
import {LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import { formatDate } from '../helpers'

import SaveIcon from '../img/icono_ahorro.svg'
import HomeIcon from '../img/icono_casa.svg'
import FoodIcon from '../img/icono_comida.svg'
import ExpensesIcon from '../img/icono_gastos.svg'
import HobbieIcon from '../img/icono_ocio.svg'
import HealthIcon from '../img/icono_salud.svg'
import SubscriptionsIcon from '../img/icono_suscripciones.svg'

const Expense = ({expense, setEditExpense}) => {
  const {id, name, quantity, category, date } = expense

  const iconsDictionary = {
    save : SaveIcon,
    food : FoodIcon,
    home : HomeIcon,
    expenses : ExpensesIcon,
    hobbie : HobbieIcon,
    health : HealthIcon,
    Subscriptions : SubscriptionsIcon
  }

  const leadingActions = () => (
    //edit
    <LeadingActions>
      <SwipeAction onClick={() => setEditExpense(expense)}>Edit</SwipeAction>
    </LeadingActions>
  )


  const trailingActions = () => (
    //edit
    <TrailingActions>
      <SwipeAction onClick={() => console.log('delete')}>Delete</SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">

            <img
              src={iconsDictionary[category]}
              alt="Expense icon"
            />

            <div className="descripcion-gasto">
              <p className="categoria">{category}</p>
              <p className="nombre-gasto">{name}</p>
              <p className='fecha-gasto'>
                Added : {''} <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>
          <p className='cantidad-gasto'> ${quantity}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense