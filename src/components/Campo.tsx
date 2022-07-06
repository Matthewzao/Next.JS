import { Flex, Text, Box, } from "@chakra-ui/react";

export function Campo() {
    return (

        <Box bg="gray.800" p="8" borderRadius="5" paddingBottom={4}>
            <a href="https://pt.wikipedia.org/wiki/Next.js">
                <Text color="purple.600" textAlign="center" fontSize="lg" fontWeight="bold">O que é Next.Js?</Text>
                <Text p="2" marginTop="5" bg="gray.700" borderRadius="5">Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.O Google fez uma doação para o projeto Next.js.</Text>
            </a>
        </Box>
    )
}
