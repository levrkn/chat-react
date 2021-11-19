import { toast } from 'react-toastify';

export const isJson: (str: string) => boolean = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const errorAlert: (text: string) => void = (text) =>
  toast.error(text, {
    position: 'top-center',
    draggable: false,
  });

export const successAlert: (text: string) => void = (text) => {
  toast.success(text, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    draggable: false,
  });
};
