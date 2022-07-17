import { Flex } from '@chakra-ui/react';
import QuizCard from './quiz-card';
import QuizDetail from './quiz-detail';

const Quiz = () => {
  return (
    <Flex w="full" h="82vh" flex="1" bg="red.200">
      <Flex
        flex={1}
        w="full"
        justifyContent={'center'}
        height={'full'}
        pt="5em"
        bg="white"
      >
        <QuizCard />
      </Flex>
      <Flex
        flex={1}
        w="full"
        justifyContent={'center'}
        height={'full'}
        pt="5em"
        bg="#FAFBFF"
      >
        <QuizDetail />
      </Flex>
    </Flex>
  );
};

export default Quiz;
