import initial from '../../assets/img/initial-image.png'
import './styles.css'
function HeaderComponent(){
    return(
        <header>
        <div className="titulo-container">
            <h1>Arcadia</h1>
            <img src={initial} alt="imagem de capa" />
            <p>Desenvolvido por Rafael Soares</p>
        </div>
    </header>
    )
}

export default HeaderComponent