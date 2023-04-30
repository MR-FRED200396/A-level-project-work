import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .min(1, "Minimum length of first name should be 1 character")
    .max(20, "Maximum length of first name should be 20 characters"),
  lastName: yup
    .string()
    .required()
    .min(1, "Minimum length of last name should be 1 character")
    .max(20, "Maximum length of last name should be 20 characters"),
  email: yup.string().required().email("Please enter a valid email address"),
});

export const validationResolver = yupResolver(validationSchema);
