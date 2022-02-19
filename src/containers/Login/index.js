import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, toggleLoginModal } from "../../actions";
import Modal from "../../components/Modal";
import { Modalheader, Modalbody, ModalContainer } from "./styles";

const Login = () => {
  const modalOpen = useSelector((state) => state.loginModal);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onChangeInput = (e, mode) => {
    // const regex = /^(.+)@(.+)$/g;
    //Need to add validation for required fields
    const { value } = e.target;
    if (mode === "username") {
      setUserName(value);
    } else {
      setPassword(value);
    }
  };
  return modalOpen ? (
    <Modal id="modal-root">
      <ModalContainer onClick={() => dispatch(toggleLoginModal())}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-body">
              <Modalbody>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => dispatch(toggleLoginModal())}
                ></button>
                <div className="login-block">
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "shop.png"}
                      alt="store"
                      className="logo"
                    />
                    Shop
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="email"
                        autofocus
                        className="form-control required"
                        placeholder="Email"
                        value={userName}
                        onChange={(e) => onChangeInput(e, "username")}
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
                        className="form-control required"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => onChangeInput(e, "password")}
                      />
                    </div>
                  </div>
                  <hr className="hr-xs" />
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => dispatch(login(userName, password))}
                  >
                    Login
                  </button>
                </div>
              </Modalbody>
            </div>
          </div>
        </div>
      </ModalContainer>
    </Modal>
  ) : null;
};

export default Login;
