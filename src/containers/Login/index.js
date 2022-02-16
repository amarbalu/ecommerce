import Modal from "../../components/Modal";
import { Modalheader } from "./styles";

const Login = () => {
  return (
    <Modal id="modal-root">
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <Modalheader className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </Modalheader>
            <div className="modal-body">...</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
