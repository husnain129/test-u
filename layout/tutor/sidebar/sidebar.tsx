import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { AiOutlineHistory } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md';
import { SiderBarData, TSideBarData, TSideBarProps } from './sidebar-data';

const SideBarIcons = (title: TSideBarData) => {
    switch (title) {
        case 'Dasboard':
            return <MdDashboard size={20} />;
        case 'Profile':
            return <BiUser size={20} />;
        case 'History':
            return <AiOutlineHistory size={20} />;
        case 'Quizez':
            return <BsJournalBookmarkFill size={20} />;
    }
};


const Sidebar = ({ selectedSidebarItem, setSelectedSidebarItem }: TSideBarProps) => {
    return (
        <Flex
            w="full"
            h="100vh"
            py="2em"
            flexDir={'column'}
            justifyContent="space-between"
        >
            <Flex flexDir={'column'} w="full" gap=".7em" px={'1em'}>
                <Flex
                    gap={'1em'}
                    h="4em"
                    mb={'1em'}
                    alignItems={'center'}
                    w="full"
                    px="1em"
                >
                    <Image w="3em" h="3em" cursor={"pointer"} objectFit={"cover"} src='https://i.pinimg.com/736x/d3/fb/5c/d3fb5caa6e37874c5f6cfc91eab298bd.jpg' borderRadius={"full"} alt='profile' />

                    {/* <Box w="3em" h="3em" borderRadius={'full'} bg="orange.400" /> */}
                    <Text fontSize={'1.2em'} fontWeight="bold">
                        husnain@129
                    </Text>
                </Flex>
                {SiderBarData.map((item, index) => (
                    <Box key={index} onClick={() => setSelectedSidebarItem(item)}>
                        <SideBarItems selectedItem={selectedSidebarItem} title={item} />
                    </Box>
                ))}
            </Flex>
            <Flex w="full" gap=".7em" px={'1em'}>
                <Button
                    gap={'1em'}
                    display="flex"
                    h="3em"
                    mb={'1em'}
                    colorScheme="orange"
                    cursor={'pointer'}
                    borderRadius="5px"
                    alignItems={'center'}
                    justifyContent="flex-start"
                    w="full"
                    px="1em"
                >
                    <FiLogOut size={20} />
                    <Text fontSize={'1.1em'}>Logout</Text>
                </Button>
            </Flex>
        </Flex>
    );
};

const SideBarItems = ({
    title,
    selectedItem,
}: {
    title: TSideBarData;
    selectedItem: TSideBarData;
}) => {
    return (
        <Flex
            gap={'1em'}
            h="3.5em"
            w="full"
            fontWeight={'semibold'}
            alignItems={'center'}
            borderRadius="5px"
            cursor={'pointer'}
            px="1em"
            bg={selectedItem === title ? '#FFF8D9' : 'white'}
            transition="all 300ms"
            _hover={{
                background: '#FFF8D9',
            }}
        >
            <Flex
                h="2.5em"
                w="2.5em"
                borderRadius={'5px'}
                bg="white"
                alignItems={'center'}
                justifyContent="center"
            >
                {SideBarIcons(title)}
            </Flex>
            <Text>{title}</Text>
        </Flex>
    );
};

export default Sidebar;
