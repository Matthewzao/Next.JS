import { Header } from "../components/Header";
import { Flex } from "@chakra-ui/react";
import { SideBar } from "../components/SideBar";

export default function Dashboard() {
    return (

        <Flex direction="column" height="100vh" border="1px solid red">
            <Header />

            <Flex width="100%" marginY="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />

            </Flex>
        </Flex>

    )
}