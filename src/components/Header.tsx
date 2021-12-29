import Logo from "./Logo/Logo";
import MyBasket from "./MyBasket/MyBasket";
import SearchBar from "./SearchBar/SearchBar";

function Header() {
  return (
    <div className="header">
      <Logo></Logo>
      <SearchBar></SearchBar>
      <MyBasket></MyBasket>
    </div>
  );
}

export default Header;
