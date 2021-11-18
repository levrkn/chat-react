import { toast } from 'react-toastify';

export const isJson = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const errorAlert = (text: string) =>
  toast.error(text, {
    position: 'top-center',
    draggable: false,
  });

export const successAlert = (text: string) =>
  toast.success(text, {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: true,
    draggable: false,
  });
