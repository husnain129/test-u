import { Flex, Text } from '@chakra-ui/react';
import { TbArrowUpRight } from 'react-icons/tb';
import QuizData from './quiz-data';
const QuizDetail = () => {
  return (
    <Flex flexDir={'column'} w="23em" gap={'.5em'}>
      <Text fontSize={'.9em'} color="#B0B6C6">
        {QuizData.detail}
      </Text>
      <Flex
        gap={'.2em'}
        fontSize=".9em"
        alignItems="center"
        color={'blue.300'}
        cursor="pointer"
      >
        <Text>Learn More</Text>
        <TbArrowUpRight />
      </Flex>
    </Flex>
  );
};

export default QuizDetail;
