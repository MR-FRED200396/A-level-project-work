import PropTypes from "prop-types";
import classnames from "classnames";

import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { Portal } from "../Portal/Portal";

import css from "./styles.module.css";

export const CustomModal = ({
  title,
  isOpen,
  onClose,
  className,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <Portal portalName="modal">
      <div className={css.modalOverlay} />
      <Container
        maxWidth="md"
        className={classnames(css.modalContainer, className)}
      >
        <CloseIcon onClick={onClose} className={css.closeIcon} />
        {title && (
          <Typography
            className={css.modalTitle}
            variant="button"
            display="block"
            gutterBottom
          >
            {title}
          </Typography>
        )}
        <Divider id={css.modalDivider} />
        {children}
      </Container>
    </Portal>
  );
};

CustomModal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.any,
};
