import { toast } from "react-toastify";

export const toastSuccess = (message, toastId) => {
  let options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
  };
  options = toastId ? { ...options, toastId: toastId } : options;

  toast.success(message, options);
};

export const toastError = (message, toastId) => {
  let options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    theme: "dark",
  };
  options = toastId ? { ...options, toastId: toastId } : options;

  toast.error(message, options);
};
