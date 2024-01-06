import { ToastOptions, toast } from "react-toastify";

export const showNotification = (
  type: "info" | "warning" | "success" | "error",
  message: string,
  options?: ToastOptions
) => {
  const defaultOptions: ToastOptions = {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    ...options,
  };

  toast[type](message, defaultOptions);
};
