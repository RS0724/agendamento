import "./style.css";
interface IProps {
  setSwitchModal: React.Dispatch<React.SetStateAction<boolean>>;
  exSwitchModal: boolean;
}
const Modal = ({ exSwitchModal, setSwitchModal }: IProps) => {
  return (
    <>
      <div id="container-modal">
        <div id="content-modal">
          <span className="span-modal">
            <img
              className="img-modal"
              src="public/engrenagem.png"
              alt="configuração"
            />
            <p>Configuração</p>
          </span>

          <span className="span-modal">
            <img className="img-modal" src="public/mulher.png" alt="suporte" />
            <p>Suporte</p>
          </span>
          <span className="span-modal">
            <img className="img-modal" src="public/sair.png" alt="sair" />
            <p>Sair</p>
          </span>
        </div>
        <img
          id="closer-modal"
          src="public/botao.png"
          alt="passartela"
          onClick={() => {
            setSwitchModal(false);
            const doc = document.getElementById("container-modal");
            if (doc) {
              doc.style.display = "none";
            }
          }}
        />
      </div>
    </>
  );
};

export default Modal;
