import { Flex, Text } from '@chakra-ui/react';
import Navbar from 'layout/navbar';

const Home = () => {
  return (
    <Flex w="full" flexDir={'column'} h="full">
      <Navbar />
      <Text>Hello</Text>
    </Flex>
  );
};

export default Home;
