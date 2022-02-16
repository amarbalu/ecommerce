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
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <div className="navbar-nav ms-auto">
            <Link to="/" onClick={(e) => e.preventDefault()} className="link">
              <div className="nav-link">Products</div>
            </Link>
            <Link to="/" onClick={(e) => e.preventDefault()} className="link">
              <div
                className="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => dispatch(toggleLoginModal())}
              >
                Sign In
              </div>
            </Link>
          </div>
          <Link to="/cart">
            <ButtonContainer className="cart-icon">
              <Icon className="bi bi-bag position-relative">
                <span className="position-absolute bottom-0 start-80 translate-middle p-1 bg-dark text-light rounded-circle">
                  {count}
                </span>
              </Icon>
              <span className="d-md-none d-xs-block ms-2 title">
                My Shopping Cart
              </span>
            </ButtonContainer>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NavBarMenu;
