import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";


const QuizCard = ({ size, noOfCards }: { size: number, noOfCards: number }) => {
    return (
        <Grid templateColumns={`repeat(${size}, 1fr)`} w="full" gap={3}>
            {
                [...Array(noOfCards)].map((_, index) => (
                    <GridItem w="22em" borderRadius={"1em"} h="14.5em" boxShadow={"sm"} bg="white" gap={".3em"} display={"flex"} flexDir="column" alignItems={"flex-start"} cursor={"pointer"} key={index}  >
                        <Image w="22em" h="12em" borderRadius={"5px"} src="https://blog.theodo.com/static/ba2166b279b234c4824d1c2fb299ced2/a79d3/ts_logo.png" alt="quiz-card" />
                        <Flex w="full" h={"2.5em"} justifyContent="space-between" px="1em" alignItems={"center"}>
                            <Text fontWeight={"semibold"}>TypeScript</Text>
                            <Flex gap={".4em"} justifyContent={"center"} alignItems="center">
                                <AiFillEye color="orange" size={"1.3em"} />
                                <Text fontSize={".8em"}>12</Text>
                            </Flex>
                        </Flex>
                    </GridItem>
                ))
            }
        </Grid>
    )
};

export default QuizCard;
