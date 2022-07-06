import { Header } from "../components/Header";
import { Box, Flex, HStack, Input, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { SideBar } from "../components/SideBar";
import { Pagination } from "../components/Pagination";
import { Campo } from "../components/Campo";
import { Comentario } from "../components/Comentario";

export default function Dashboard() {
    return (

        <Flex direction="column" height="100vh" border="1px solid red">
            <Header />

            <Flex border="1px solid green" width="100%" marginY="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />

                <SimpleGrid flex="1" gap="4" height="100%" width="100vh" minChildWidth="320px" alignItems="flex-start" >

                    <Flex gap="4">
                        <Campo />
                        <Campo />
                        <Campo />
                        <Campo />
                    </Flex>
                </SimpleGrid>
            </Flex>
            <Flex justifyContent="center">
                <Comentario />
            </Flex>
        </Flex >

    )
}