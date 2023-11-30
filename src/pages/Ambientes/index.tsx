import BoxAmbientes from "../../components/BoxAmbientes";
import Modal from "../../components/Modal";

interface IProps {

  setSwitchModal: React.Dispatch<React.SetStateAction<boolean>>;
  exSwitchModal: boolean
}

const Ambientes = ({exSwitchModal, setSwitchModal}: IProps) => {
  return (
    <>
      <div id="container">
        <div id="box">
          <BoxAmbientes setSwitchModal={setSwitchModal}/>
        </div>
        <Modal setSwitchModal={setSwitchModal} exSwitchModal={exSwitchModal}/>
      </div>
    </>
  );
};

export default Ambientes;
