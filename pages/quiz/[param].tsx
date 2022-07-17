import Quiz from '@/components/public/quiz/quiz';
import { Flex } from '@chakra-ui/react';
import Navbar from 'layout/navbar';

const QuizPage = () => {
  return (
    <Flex w="full" h="100vh" flexDir={'column'}>
      <Navbar />
      <Quiz />
    </Flex>
  );
};

export default QuizPage;
