import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("Agent name is required."),
  strategy: yup.string().required("Please enter your strategy."),
  action: yup.string().required("Please choose your action."),
});
