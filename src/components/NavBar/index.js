import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleLoginModal } from "../../actions";
import { ButtonContainer, Container, Icon } from "./styles";
const NavBarMenu = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <Container className="navbar navbar-expand-lg navbar-light bg-light px-sm-5 fixed-top">
      <div className="container-fluid">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "shop.png"}
            alt="store"
            className="navbar-brand"
          />
        </Link>

        <div className="navbar-nav ms-auto">
          <Link to="/" onClick={(e) => e.preventDefault()} className="link">
            <div
              className="nav-link"
              onClick={() => dispatch(toggleLoginModal())}
            >
              Sign In
            </div>
          </Link>
        </div>
        <Link to="/cart">
          <ButtonContainer className="cart-icon">
            <Icon className="bi bi-bag position-relative ms-2">
              <span className="badge position-absolute bottom-0 start-80 translate-middle p-1  text-light rounded-circle">
                {count}
              </span>
            </Icon>
          </ButtonContainer>
        </Link>
      </div>
    </Container>
  );
};

export default NavBarMenu;
