import { Grid, GridItem, Image } from "@chakra-ui/react";


const QuizCard = ({ size }: { size: number }) => {
    return (
        <Grid templateColumns={`repeat(${size}, 1fr)`} w="full" gap={3}>
            {
                [...Array(2)].map((_, index) => (
                    <GridItem cursor={"pointer"} key={index} w='100%' h='10' >
                        <Image borderRadius={"5px"} src="https://blog.theodo.com/static/ba2166b279b234c4824d1c2fb299ced2/a79d3/ts_logo.png" alt="quiz-card" />
                    </GridItem>
                ))
            }
        </Grid>
    )
};

export default QuizCard;
