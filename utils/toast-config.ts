import { UseToastOptions } from '@chakra-ui/react';

interface IToast {
  message: string;
  title?: string;
  action: 'error' | 'success' | 'info';
}

const toastConfig = ({ message, action, title }: IToast): UseToastOptions => {
  return {
    title: title || action.toUpperCase(),
    status: action,
    description: message,
    isClosable: true,
    duration: 3000,
    position: 'top-left',
  };
};

export default toastConfig;
