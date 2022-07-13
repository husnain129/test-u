import { Flex } from '@chakra-ui/react';
import Login from '../features/authentication/components/Login';

const LoginPage = () => {
  return (
    <Flex w="full" bg="#e9ecf6" h="100vh">
      <Login />
    </Flex>
  );
};
export default LoginPage;
