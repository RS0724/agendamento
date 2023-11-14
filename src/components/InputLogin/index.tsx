import "./style.css"

interface IProps {
  image: string;
  type: string;
  alt: string;
  idImg: string;
  idInput: string
}
const InputLogin = ({ image, type, alt, idImg, idInput }: IProps) => {
  return     <>
      <img src={image} alt={alt} id={idImg} className="img-login"/>
      <input type={type} id={idInput} className="input-login"/>
    </>
  
};

export default InputLogin;
