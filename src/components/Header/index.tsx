import "./style.css"
interface IProps {
  titleHeader: string;
}

const Header = ({ titleHeader }: IProps) => {
  return (
    <>
      <header id="header">
        <img id="menuamburg" src="public/menuamburg.png" alt="" />
        <span id="titleheader">{titleHeader}</span>
      </header>
    </>
  );
};

export default Header;
