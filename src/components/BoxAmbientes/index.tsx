import CardAmbientes from "../CardAmbientes"
import Header from "../Header"
import "./style.css"
interface IProps {

    setSwitchModal: React.Dispatch<React.SetStateAction<boolean>>;
    
  }

const BoxAmbientes = ({setSwitchModal}: IProps) => {
    return <>
   
     
    <Header titleHeader="Ambientes" setSwitchModal={setSwitchModal}/>
    <input id="pesquisa" type="text" />
    <img id="lupa" src="public/lupa.png" alt="" />
    
    <div id="content-cards">
    <CardAmbientes img={"public/computador.png"} title={"Laboratório Informática I"}/>
    <CardAmbientes img={"public/computador.png"} title={"Laboratório Informática II"}/>
    <CardAmbientes img={"public/computador.png"} title={"Laboratório Informática III"}/>
    <CardAmbientes img={"public/usinagem.png"} title={"Laboratório Usinagem"}/>
    <CardAmbientes img={"public/mecanica.png"} title={"Manutenção e Mecanica"}/>
    <CardAmbientes img={"public/eletrica.png"} title={"Laboratório Elétrica"}/>
    <img id="frame" src="public/Frame 2.png" alt="" onClick={()=>setSwitchModal(true)} />
    </div>

    </>
}

export default BoxAmbientes