import { Box, Flex, Image, Text } from "@chakra-ui/react"

const DashboardAnalysis = () => {
    return (
        <Flex w="full" h="full" flex="1" borderRadius={"5px"} px="2em" alignItems={"center"} bg="white" boxShadow={"sm"}>
            <Flex flex={1}>
                <Image w={"15em"} src="/analysis.svg" alt="analysis" />
            </Flex>
            <Flex flex={1} h="full" gap={"1em"} flexDir="column" justifyContent={"center"} alignItems="center">
                <Flex w="full" justifyContent={"space-between"} alignItems="center">
                    <Flex gap={'1em'}>
                        <ColorBox color="#2DBCBF" />
                        <Text>Total Number of Tests</Text>
                    </Flex>
                    <Text>12</Text>
                </Flex>
                <Flex w="full" justifyContent={"space-between"} alignItems="center">
                    <Flex gap={'1em'}>
                        <ColorBox color="#F1C231" />
                        <Text>Number of Tests Solved</Text>
                    </Flex>
                    <Text>10</Text>
                </Flex>
                <Flex w="full" justifyContent={"space-between"} alignItems="center">
                    <Flex gap={'1em'}>
                        <ColorBox color="#FF5C4C" />
                        <Text>Total Likes</Text>
                    </Flex>
                    <Text>12</Text>
                </Flex>
                <Flex w="full" justifyContent={"space-between"} alignItems="center">
                    <Flex gap={'1em'}>
                        <ColorBox color="#2DBCBF" />
                        <Text>Total Visits To your Tests</Text>
                    </Flex>
                    <Text>20</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

const ColorBox = ({ color }: { color: '#2DBCBF' | '#F1C231' | '#FF5C4C' }) => {
    return <Box w="1em" borderRadius={"full"} h="1em" bg={color} />
}

export default DashboardAnalysis