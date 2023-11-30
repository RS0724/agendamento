import "./style.css"
interface IProps {
  titleHeader: string;
  setSwitchModal: React.Dispatch<React.SetStateAction<boolean>>;
}


const Header = ({ titleHeader, setSwitchModal }: IProps) => {
  return (
    <>
      <header id="header">
        <img id="menuamburg" src="public/menuamburg.png" alt="" onClick={()=>{
          const doc = document.getElementById("container-modal");
          if (doc) {
            doc.style.display = "flex";
          }
        }}/>
        <span id="titleheader">{titleHeader}</span>
      </header>
    </>
  );
};

export default Header;
