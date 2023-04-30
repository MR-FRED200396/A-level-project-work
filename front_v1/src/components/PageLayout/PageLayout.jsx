import PropTypes from "prop-types";

import Box from "@mui/material/Box";

export const PageLayout = ({ children, ...props }) => (
  <Box sx={{ marginTop: "64px" }} {...props}>
    {children}
  </Box>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
