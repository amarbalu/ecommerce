import { useDispatch, useSelector } from "react-redux";
import { toggleLoginModal } from "../../actions";
import Modal from "../../components/Modal";
import { Modalheader, Modalbody, ModalContainer } from "./styles";

const Login = () => {
  const modalOpen = useSelector((state) => state.loginModal);
  const dispatch = useDispatch();
  return modalOpen ? (
    <Modal id="modal-root">
      <ModalContainer onClick={() => dispatch(toggleLoginModal())}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Modalheader className="modal-header">
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(toggleLoginModal())}
              ></button>
            </Modalheader>
            <div className="modal-body">
              <Modalbody>
                <div className="login-block">
                  <h1>Log into your account</h1>

                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-user ti-user"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                  </div>

                  <hr className="hr-xs" />

                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-lock ti-unlock"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <hr className="hr-xs" />
                  <button className="btn btn-primary btn-block" type="submit">
                    Login
                  </button>

                  {/* <div className="login-footer">
                    <h6>Or register with</h6>
                    <ul className="social-icons">
                      <li>
                        <a className="facebook" href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className="linkedin" href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>

                {/* <div className="login-links">
                  <p className="text-center">
                    Already have an account?{" "}
                    <a className="txt-brand" href="user-login.html">
                      Login
                    </a>
                  </p>
                </div> */}
              </Modalbody>
            </div>
          </div>
        </div>
      </ModalContainer>
    </Modal>
  ) : null;
};

export default Login;
