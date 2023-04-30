import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

import { CustomModal } from "../CustomModal/CustomModal";
import { CustomTable } from "../CustomTable/CustomTable";

import { getShoppingCartModalSelector } from "../../redux/selectors/modalsSelectors";
import {
  getSelectedProductsByCurrencySelector,
  getSelectedProductsTotalPrice,
} from "../../redux/selectors/productSelectors";

import { toggleModal } from "../../redux/slices/modalsSlice";
import { deleteProduct } from "../../redux/slices/productsSlice";

import { validationResolver } from "./validation";

export const ShoppingCart = () => {
  const dispatch = useDispatch();

  const shoppingCartModalIsOpen = useSelector(getShoppingCartModalSelector);
  const products = useSelector(getSelectedProductsByCurrencySelector);
  const totalPrice = useSelector(getSelectedProductsTotalPrice);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    resolver: validationResolver,
  });

  const onCloseModalHandler = () => {
    dispatch(toggleModal("shoppingCart"));
  };

  const onSubmit = (data) => console.log(data);

  const renderProductRow = ({
    id,
    name,
    count,
    formattedPrice,
    totalPrice,
  }) => (
    <>
      <TableCell>{name}</TableCell>
      <TableCell>{count}</TableCell>
      <TableCell>{formattedPrice}</TableCell>
      <TableCell>{totalPrice}</TableCell>
      <TableCell>
        <Button onClick={() => dispatch(deleteProduct(id))}>Delete</Button>
      </TableCell>
    </>
  );

  return (
    <CustomModal
      modalType="shoppingCart"
      title={"Shopping cart"}
      isOpen={shoppingCartModalIsOpen}
      onClose={onCloseModalHandler}
    >
      {!products.length ? (
        <Typography variant="caption" color="error">
          Shopping card is empty
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ minWidth: "80%" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ my: "25px" }}>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="First name"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
                {errors.firstName && (
                  <Typography variant="caption" color="error">
                    {errors.firstName.message}
                  </Typography>
                )}
              </Box>
              <Box sx={{ my: "25px" }}>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Last name"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
                {errors.lastName && (
                  <Typography variant="caption" color="error">
                    {errors.lastName.message}
                  </Typography>
                )}
              </Box>
              <Box sx={{ my: "25px" }}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
                {errors.email && (
                  <Typography variant="caption" color="error">
                    {errors.email.message}
                  </Typography>
                )}
              </Box>
              <Box sx={{ my: "50px" }}>
                <CustomTable
                  headerItems={[
                    "Name",
                    "Selected amount",
                    "Price",
                    "Total price",
                    "Action",
                  ]}
                  items={products}
                  renderRow={renderProductRow}
                />
              </Box>
              <Box>
                <Typography variant="caption">{`Total price: ${totalPrice}`}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  sx={{ backgroundColor: "green" }}
                  variant="contained"
                  type="submit"
                  disabled={!isValid}
                >
                  Continue
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      )}
    </CustomModal>
  );
};
