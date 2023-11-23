import "./style.css"
interface IProps {
    img: string;
    title: string;
}

const CardAmbientes = ({img, title}:IProps) => {
    return <>
    <div id="CardAmbientes">
     
    <img id="img-card" src={img} alt="" />
    <span id="title-card">{title}</span>
    </div>
    </>
}

export default CardAmbientes