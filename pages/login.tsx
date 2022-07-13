import Login from '@/features/authentication/components/Login';
import { Flex } from '@chakra-ui/react';

const login = () => {
  return (
    <Flex w="full" bg="#e9ecf6" h="100vh">
      <Login />
    </Flex>
  );
};
export default login;
