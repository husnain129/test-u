import Signup from '@/features/authentication/components/Signup';
import { Flex } from '@chakra-ui/react';

const signup = () => {
  return (
    <Flex w="full" bg="#e9ecf6" h="100vh">
      <Signup />
    </Flex>
  );
};

export default signup;
