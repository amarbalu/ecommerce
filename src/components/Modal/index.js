import usePortal from "./portals";
import { createPortal } from "react-dom";

const Modal = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(children, target);
};

export default Modal;
