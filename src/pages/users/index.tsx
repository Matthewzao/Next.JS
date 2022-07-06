import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";

export default function UserList() {
    return (
        <Box>
            <Header />
            <Flex></Flex>

            <Flex width="100%" marginY="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />

                <Box flex="1" border="1px solid red" borderRadius="8" bg="gray.800" p="8" >
                    <Flex marginBottom="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Button as="a" colorScheme="pink" size="sm" leftIcon={<Icon as={RiAddLine} />} >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <Checkbox colorScheme="pink"> </Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Mateus Gomes da Silva</Text>
                                        <Text fontSize="sm" color="gray.500">matthewmoralesdedsec@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td color="gray.500">18 Setembro 2022</Td>
                                <Td width="8">
                                    <Button fontSize="sm" size="sm" leftIcon={<Icon as={RiPencilLine} />} colorScheme="purple">Editar</Button>
                                </Td>

                            </Tr>
                        </Tbody>

                    </Table>


                    <Pagination />



                </Box>


            </Flex>
        </Box>
    );
}