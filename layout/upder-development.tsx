import { Flex, Image, Text } from "@chakra-ui/react";


const UpderDevelopment = () => {
    return <Flex gap={"1em"} flexDir={"column"} w="full" h={"full"} alignItems="center" justifyContent={"center"}>
        <Image w={"25em"} src="/under-development.svg" alt="under-development" />
        <Text fontSize={"1.5em"} fontWeight="semibold">Under Development</Text>
    </Flex>;
};

export default UpderDevelopment;
