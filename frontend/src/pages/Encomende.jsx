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
        Encomende
      </div>
      <div className='Footer'>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Encomende
