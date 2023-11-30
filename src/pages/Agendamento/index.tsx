import Header from "../../components/Header";
import Modal from "../../components/Modal";
import "./style.css";
interface IProps {

    setSwitchModal: React.Dispatch<React.SetStateAction<boolean>>;
    exSwitchModal: boolean
}

const Agendamento = ({exSwitchModal, setSwitchModal}: IProps) => {
  return (
    <>
      <div id="container">
        <div id="box">
            <Header setSwitchModal={setSwitchModal} titleHeader={"Agendamento"} />
          </div>
        <Modal exSwitchModal={exSwitchModal} setSwitchModal={setSwitchModal} />
      </div>
    </>
  );
};

export default Agendamento;