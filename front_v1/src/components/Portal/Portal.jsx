import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const PORTAL_MAP = {
  modal: document.getElementById("modal"),
};

export const Portal = ({ portalName, children }) => {
  const wrapperElement = PORTAL_MAP[portalName];

  return createPortal(children, wrapperElement);
};

Portal.propTypes = {
  portalName: PropTypes.string,
  children: PropTypes.any,
};
