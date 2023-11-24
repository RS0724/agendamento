import "./style.css"

const Modal = () => {
  return (
    <>
      <div id="container-modal">
        <div id="content-modal">
        <span className="span-modal">
            <img className="img-modal" src="public/engrenagem.png" alt="configuração" />
            <p>
            Configuração
            </p>
        </span>

        <span className="span-modal">
            <img className="img-modal" src="public/mulher.png" alt="suporte" />
            <p>
            Suporte
            </p>
            </span>
        <span className="span-modal">
            <img className="img-modal" src="public/sair.png" alt="sair" />
            <p>
            Sair
            </p>
            </span>
        </div>
        <img id="closer-modal" src="public/botao.png" alt="passartela" />
      </div>
    </>
  );
};

export default Modal;