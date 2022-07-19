import { Button, Flex, Text } from "@chakra-ui/react";
import QuizCard from "../components/quiz-card";
import DashboardHeader from "../dashboad/components/header";


const Quiz = () => {
    return <Flex flexDir={"column"} gap="2em" w="full" h="full" p="1em" >
        <Flex alignItems={"center"} justifyContent="space-between">
            <Text fontSize={"2em"} fontWeight="semibold">Quizes</Text>
            <DashboardHeader />
            <Button colorScheme={"orange"}>Add Quiz</Button>
        </Flex>
        <Flex w={"full"} h="full" overflowY={"auto"}>
            <QuizCard size={3} noOfCards={20} />
        </Flex>
    </Flex>;
};

export default Quiz;
