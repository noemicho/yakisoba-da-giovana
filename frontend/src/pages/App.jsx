import '../styles/App.css'
import exemplo from '../images/image.png'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <div className='HeaderApp'>
        <Header></Header>
      </div>
      <div className='BodyApp'>
        <h3 className='titulo1'>Seja bem-vindo(a)!</h3>
        <div className='meio'>
          <p className='paragrafo1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non enim semper, rhoncus arcu id, volutpat nunc. Proin ac tempus odio. Ut accumsan pellentesque libero. Praesent placerat quam non iaculis hendrerit. Etiam ut velit mauris. Pellentesque auctor, eros vel semper dictum, dui urna dictum ante, vel accumsan elit sem nec odio. Pellentesque vehicula dolor non quam gravida fringilla. Aenean facilisis vel purus non tincidunt. Etiam vel fermentum velis.
          </p>
          <img className='gigi' src={exemplo} alt='Foto da Giovana'></img>
        </div>
        
        <a href="https://www.instagram.com/giovanachinfang/" target="_blank" className='Helvetica header-a'>@giovanachinfang</a>
      </div>
      <div className='Footer'>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
