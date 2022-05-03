const NewBudget = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" action="">
        <div className="campo">
          <label htmlFor="">Define Budget</label>

          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Add your budget"
          />
        </div>

        <input type="submit" value="Add"/>
      </form>
    </div>
  )
}

export default NewBudget