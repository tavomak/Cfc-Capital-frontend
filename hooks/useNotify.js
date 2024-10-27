import { toast } from "react-toastify";

const toastConfig = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
};

const useNotify = () => {
  const notification = (status, message) => {
    switch (status) {
      case "success":
        toast.success(message, { ...toastConfig });
        break;
      case "warning":
        toast.warning(message, { ...toastConfig });
        break;
      case "info":
        toast.info(message, { ...toastConfig });
        break;
      case "error":
        toast.error(message, { ...toastConfig });
        break;
      default:
        toast.success(message, toastConfig);
        break;
    }
  };
  return [notification];
};

export default useNotify;
