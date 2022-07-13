import { Button, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex w="full" h="full">
      <Button colorScheme={'button'}>Hello</Button>
      <Button colorScheme={'red'}>Hello red</Button>
    </Flex>
  );
};

export default Home;
