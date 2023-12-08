import '../styles/Encomende.css'

import Header from '../components/Header'
import Footer from '../components/Footer'


function Encomende() {
  return (
    <div className="Encomende">
      <div className='HeaderPreços'>
        <Header></Header>
      </div>
      <div className='BodyEncomende'>
        <h3 className='titulo2'>Formas de Pagamento</h3>
        <div className='meio-2'>
            <p className='pe'>Dinheiro ou Pix</p>
            <div className='meio-do-meio'>
              <span className='span'>Pix</span>
                <p>
                  chinfang1974@gmail.com
                  <br></br>
                  Banco Santander
                  <br></br>
                  Cho Chin Fang
                </p>
            </div>
            
        </div>
        <button type="button" class="btn btn-light botao"><a href='' className='a-botao'>Encomende pelo WhatsApp</a></button>
        <p class='helvetica'>(21) 98779-7268</p>
      </div>
      <div className='Footer'>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Encomende
