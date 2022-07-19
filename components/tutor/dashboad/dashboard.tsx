import { Divider, Flex, Text } from '@chakra-ui/react';
import QuizCard from '../components/quiz-card';
import DashboardAnalysis from './components/analysis';

const Dashboard = () => {
    return (
        <Flex gap={"2em"} w="full" flexDir={"column"} p="2em" justifyContent={"space-between"} alignItems="flex-start" minH={'full'} flex="1">
            <Flex justifyContent={"flex-start"} w="full" h="max-content" flexDir={"column"}>
                {/* <DashboardHeader /> */}
                <Text fontSize={"2em"} fontWeight="bold">Welcome!</Text>
            </Flex>
            <Flex w="full" gap={"1em"} h="full">
                <Flex flexDir={"column"} gap="1em" w="70%">
                    <Flex w={"45.5em "} h="50%">
                        <DashboardAnalysis />
                    </Flex>
                    <QuizCard size={2} noOfCards={2} />
                </Flex>
                <Flex w="30%" gap={"2em"} px="2em" h={"full"} flexDir="column" justifyContent={"space-between"} alignItems="center" borderRadius="5px" bg="#FFD000" boxShadow={"sm"}>
                    <Flex flexDir={"column"} gap="1em" alignItems="center" justifyContent="center" flex={1}>
                        <Text fontSize={"1.5em"} fontWeight="semibold">Test.U Analysis</Text>
                        <Text fontSize={".9em"} textAlign="center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec euismod, nisl eget consectetur sagittis,
                        </Text>
                    </Flex>
                    <Flex mb="2em" flexDir={"column"} borderRadius="5px" bg="white" w={"full"} gap=".5em">
                        <Flex w={"full"} overflow={"hidden"} px="1em" h="3em" justifyContent="space-between" alignItems={"center"}>
                            <Text fontWeight={"semibold"}>Last Day Clicks</Text>
                            <Text>12</Text>
                        </Flex>
                        <Divider />
                        <Flex w={"full"} overflow={"hidden"} px="1em" h="3em" justifyContent="space-between" alignItems={"center"}>
                            <Text fontWeight={"semibold"}>Last Day Likes</Text>
                            <Text>6</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};





export default Dashboard;
