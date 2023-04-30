import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Badge from "@mui/material/Badge";

import { CurrencySelect } from "../CurrencySelect/CurrencySelect";

import { getSelectedProductsSelector } from "../../redux/selectors/productSelectors";
import { toggleModal } from "../../redux/slices/modalsSlice";

import { PAGES, ROUTES } from "../../constants";

import css from "./styles.module.css";

const MENU_ITEMS = [
  {
    title: PAGES.main,
    link: ROUTES.main,
  },
  {
    title: PAGES.categories,
    link: ROUTES.categories,
  },

  {
    title: PAGES.products,
    link: ROUTES.products,
  },

  {
    title: PAGES.currency,
    link: ROUTES.currency,
  },
];

export const Header = () => {
  const dispatch = useDispatch();

  const selectedProducts = useSelector(getSelectedProductsSelector);

  const onOpenModalHandler = () => dispatch(toggleModal("shoppingCart"));

  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Menu
        </Typography>
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <CurrencySelect />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {MENU_ITEMS.map(({ title, link }) => (
            <Button key={title} sx={{ color: "#fff" }}>
              <NavLink
                to={link}
                className={({ isActive }) =>
                  classnames({
                    [css.menuLink]: !isActive,
                    [css.activeMenuLink]: isActive,
                  })
                }
              >
                {title}
              </NavLink>
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" }, marginLeft: 8 }}>
          <Badge
            badgeContent={Object.keys(selectedProducts).length || 0}
            color="error"
          >
            <LocalGroceryStoreIcon
              className={css.storeIcon}
              onClick={onOpenModalHandler}
            />
          </Badge>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
