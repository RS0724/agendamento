import InputLogin from "../InputLogin";
import "./style.css";

const BoxWhiteLogin = () => {
  return (
    <div id="boxWhiteLogin">
      <h1 id="title-app">Agendamento de Ambiente Educaional</h1>
      <h2 id="title-login">Login</h2>
      <div id="boxWhiteLogin-gradient">
        <img
          id="art"
          src="public\art.png"
          alt="mulher com computador olhando calendario"
        />
      </div>
      <img id="logo-senai" src="public\logo-senai.png" alt="logomarca senai" />
      <img
        id="art-mobile"
        src="public\art-mobile.png"
        alt="mulher com computador olhando calendario"
      />
      <InputLogin
        image={"public/icone-email-login.png"}
        type={"email"}
        alt={"Ícone input de email"}
        idImg={"img-input-login-email"}
        idInput={"input-login-email"}
      />
      <InputLogin
        image={"public/icone-password-login.png"}
        type={"password"}
        alt={"Ícone input da senha"}
        idImg={"img-input-login-password"}
        idInput={"input-login-password"}
      />
    </div>
  );
};

export default BoxWhiteLogin;
