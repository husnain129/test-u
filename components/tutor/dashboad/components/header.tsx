/* eslint-disable react/no-children-prop */
import { Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';

const DashboardHeader = () => {
    return (
        <Flex w="max-content" h={'2em'} gap="1em" alignItems="center" justifyContent={"flex-end"} >
            <InputGroup size='sm' w={"24em"} alignItems="center"  >
                <Input type={"text"} placeholder='Search' py="1.4em" bg={"white"} borderRadius={"5px"} />
                <InputRightElement children={<BiSearch size={19} />} pr=".5em" py="1.4em" />
            </InputGroup>
            {/* <Image w="2.7em" cursor={"pointer"} objectFit={"cover"} h="2.7em" src='https://i.pinimg.com/736x/d3/fb/5c/d3fb5caa6e37874c5f6cfc91eab298bd.jpg' borderRadius={"full"} alt='profile' /> */}
        </Flex>
    );
}
export default DashboardHeader;