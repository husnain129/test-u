import { Flex } from '@chakra-ui/react';
import Sidebar from 'layout/tutor/sidebar/sidebar';

const Dashboard = () => {
  return (
    <Flex w="100vw" minH={'100vh'} flex="1">
      <Flex flex=".2" h="full">
        <Sidebar />
      </Flex>
      <Flex flex=".8" p="1em" w="full" h="100vh">
        <Flex w="full" h="full" borderRadius={'1em'} bg="#F6F7FB"></Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
