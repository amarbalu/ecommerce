import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, toggleLoginModal } from "../../actions";
import Sidebar from "../SideBar";
import { ButtonContainer, Container, Icon } from "./styles";
const NavBarMenu = () => {
  const count = useSelector((state) => state.count);
  const isloggedIn = useSelector((state) => state.isloggedIn);
  const dispatch = useDispatch();
  return (
    <Container className="navbar navbar-expand-lg navbar-light bg-light px-sm-5 fixed-top">
      <div className="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="logo">
          <img
            src={process.env.PUBLIC_URL + "shop.png"}
            alt="store"
            className="navbar-brand"
          />
          Shop
        </Link>

        <div className="navbar-nav ms-auto">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="link"
          >
            {!isloggedIn ? (
              <div
                className="nav-link"
                onClick={() => dispatch(toggleLoginModal())}
              >
                Sign In
              </div>
            ) : (
              <ButtonContainer
                className="cart-icon nav-link"
                onClick={() => dispatch(logout())}
              >
                <Icon className="bi bi-person -circle  "></Icon>
              </ButtonContainer>
            )}
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
      <div id="navbarTogglerDemo02" className=" collapse navbar-collapse">
        <div className="d-block d-lg-none">
          <Sidebar />
        </div>
      </div>
    </Container>
  );
};

export default NavBarMenu;
