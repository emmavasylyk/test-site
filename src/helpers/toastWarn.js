import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function toastError(value) {
  return toast.error(`Please enter a min value ${value}`, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
