import { RiCoinLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="container mt-6" data-testid="header">
      <h1 className="m-0 text-center">
        <span className="flex justify-center items-center"><RiCoinLine size="3rem" /></span>
        Currency Convertor</h1>
    </header>
  );
};
export default Header;
