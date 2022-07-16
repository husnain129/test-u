import { Flex, Text } from "@chakra-ui/react";
import { MdClose } from 'react-icons/md';

const Navbar = () => {
    return <Flex w="full" justifyContent={"space-between"} alignItems="center" h="12vh" borderBottom={"1px solid #EEF1EF"} px="10em">
        <Flex w={"12em"} px="1em" alignItems="center" justifyContent={"flex-start"} borderBottom=".15em solid #D8DDE7" h="full">
            <Text fontSize={".9em"} letterSpacing=".01em" color="#CBCDD4" fontWeight="semibold">Welcome</Text>
        </Flex>
        <MdClose color="#D8DDE7" size={26} cursor="pointer" />
    </Flex>;
};

export default Navbar;
