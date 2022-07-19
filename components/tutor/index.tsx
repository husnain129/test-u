import Dashboard from '@/components/tutor/dashboad/dashboard';
import { Flex } from '@chakra-ui/react';
import Sidebar from 'layout/tutor/sidebar/sidebar';
import { TSideBarData } from 'layout/tutor/sidebar/sidebar-data';
import UpderDevelopment from 'layout/upder-development';
import { useState } from 'react';
import Quiz from './quiz/quiz';

const Page = (title: TSideBarData) => {
    switch (title) {
        case 'Dasboard':
            return <Dashboard />

        case "Quizez":
            return <Quiz />
        default:
            return <UpderDevelopment />
    }

}

const Tutor = () => {
    const [selectedSidebarItem, setSelectedSidebarItem] =
        useState<TSideBarData>('Dasboard');

    return (
        <Flex w="100vw" minH={'100vh'} flex="1">
            <Flex flex=".2" h="full">
                <Sidebar selectedSidebarItem={selectedSidebarItem} setSelectedSidebarItem={setSelectedSidebarItem} />
            </Flex>
            <Flex flex=".8" p="1em" w="full" h="100vh">
                <Flex w="full" h="full" borderRadius={'1em'} bg="#F6F7FB">
                    {Page(selectedSidebarItem)}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Tutor;
