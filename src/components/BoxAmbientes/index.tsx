import CardAmbientes from "../CardAmbientes"
import Header from "../Header"
import "./style.css"

const BoxAmbientes = () => {
    return <>
    <div id="boxambientes">
     
    <Header titleHeader="Ambientes"/>
    <input id="pesquisa" type="text" />
    <img id="lupa" src="public/lupa.png" alt="" />
    
    <div id="content-cards">
    <CardAmbientes img={"public/computador.png"} title={"Laboratório Informática I"}/>
    <CardAmbientes img={"public/usinagem.png"} title={"Laboratório Usinagem"}/>
    <img id="frame" src="public/Frame 2.png" alt="" />
    </div>

    </div>
    </>
}

export default BoxAmbientes