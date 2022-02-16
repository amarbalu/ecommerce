import { Link } from "react-router-dom";
import { ButtonContainer, Container } from "./styles";
const NavBarMenu = () => {
  return (
    <Container className="navbar navbar-expand-lg navbar-light bg-light px-sm-5">
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
              >
                Sign In
              </div>
            </Link>
          </div>
          <Link to="/cart">
            <ButtonContainer className="cart-icon">
              <i class="bi bi-bag" />
              <span className="d-md-none d-xs-block ms-2 title">
                My Shopping Cart
              </span>
            </ButtonContainer>
          </Link>
        </div>
      </div>
    </Container>
    // <Container className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a
    //             className="nav-link"
    //             href="#"
    //             data-bs-toggle="modal"
    //             data-bs-target="#exampleModal"
    //           >
    //             Link
    //           </a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link dropdown-toggle"
    //             href="#"
    //             id="navbarDropdown"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Dropdown
    //           </a>
    //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <hr className="dropdown-divider" />
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Something else here
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link disabled">Disabled</a>
    //         </li>
    //       </ul>
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <form className="d-flex">
    //             <input
    //               className="form-control me-2"
    //               type="search"
    //               placeholder="Search"
    //               aria-label="Search"
    //             />

    //             <button className="btn btn-outline-success" type="submit">
    //               Search
    //             </button>
    //           </form>
    //         </li>
    //         <li className="nav-item">
    //           <a
    //             className="nav-link"
    //             href="#"
    //             data-bs-toggle="modal"
    //             data-bs-target="#exampleModal"
    //           >
    //             Login
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a
    //             className="nav-link"
    //             href="#"
    //             data-bs-toggle="modal"
    //             data-bs-target="#exampleModal"
    //           >
    //             Cart
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </Container>
  );
};

export default NavBarMenu;
