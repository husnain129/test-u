import { Button, Checkbox, Flex, Text } from '@chakra-ui/react';
import QuizData from './quiz-data';
// import { MdArrowBackIosNew } from "react-icons/md";

const QuizCard = () => {
  return (
    <Flex
      w="25em"
      h="22em"
      gap="1em"
      flexDir={'column'}
      justifyContent="flex-start"
      alignItems={'center'}
    >
      <Flex w="full">
        {/* <MdArrowBackIosNew /> */}
        <Text fontSize={'1.2em'} fontWeight="bold">
          {QuizData.title}
        </Text>
      </Flex>
      <Flex flexDir={'column'} gap=".4em" w="full">
        {QuizData.options.map((option, index) => (
          <Options key={index} option={option} />
        ))}
      </Flex>
      <Flex w="full" alignItems={'center'} justifyContent="flex-end">
        <Button colorScheme={'button'}>Next</Button>
      </Flex>
    </Flex>
  );
};

const Options = ({ option }: { option: string }) => {
  return (
    <Flex
      w={'full'}
      h="2.5em"
      alignItems={'center'}
      pl="1em"
      justifyContent="flex-start"
      transition={'all 300ms'}
      border="1px solid #d1d6e6"
      cursor="pointer"
      borderRadius={'5px'}
      _hover={{
        background: '#e8eeff',
      }}
    >
      <Checkbox w="full" size={'sm'}>
        {option}
      </Checkbox>
    </Flex>
  );
};

export default QuizCard;
