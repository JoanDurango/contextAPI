import './../styles/error-page.css';


export const ErrorPage = () => {
  return (
    <div className='custom-body-class'>
      <section id="not-found">
        <div id='tittle'>404 Error Page</div>
        <div className='circles'>
            <p>404</p>
                <p>
                    <small>¡Página no encontrada!</small>
                </p>
            <span className='circle big'></span>
            <span className='circle med'></span>
            <span className='circle small'></span>
        </div>
      </section>
    </div>
  )
}
