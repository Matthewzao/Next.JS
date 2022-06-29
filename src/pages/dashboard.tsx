import { Header } from "../components/Header";
import { Box, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { SideBar } from "../components/SideBar";

export default function Dashboard() {
    return (

        <Flex direction="column" height="100vh" border="1px solid red">
            <Header />

            <Flex width="100%" marginY="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" aling="flex-start" >
                    <Box bg="gray.800" p="8" textAlign="start" borderRadius="5">
                        <a href="https://pt.wikipedia.org/wiki/React_(JavaScript)">
                            <Text color="purple.600" textAlign="center" fontSize="lg" fontWeight="bold">O que é React?</Text>
                            <Text p="2" marginTop="5" bg="gray.700" borderRadius="5">O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.</Text>
                        </a>
                    </Box>

                    <Box bg="gray.800" p="8" borderRadius="5" paddingBottom={4}>
                        <a href="https://pt.wikipedia.org/wiki/Next.js">
                            <Text color="purple.600" textAlign="center" fontSize="lg" fontWeight="bold">O que é Next.Js?</Text>
                            <Text p="2" marginTop="5" bg="gray.700" borderRadius="5">Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.O Google fez uma doação para o projeto Next.js.</Text>
                        </a>
                    </Box>




                </SimpleGrid>

            </Flex>
        </Flex>

    )
}