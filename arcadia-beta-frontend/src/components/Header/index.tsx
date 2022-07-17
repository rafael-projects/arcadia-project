import logo from '../../assets/img/logo.jpg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="titulo-container">
                <h1>Arcadia</h1>
                <img src={logo} alt="imagem de capa" />
                <p>The project gamer<a href="https://www.google.com"> is here!</a></p>
            </div>
        </header>
    )
}


export default Header