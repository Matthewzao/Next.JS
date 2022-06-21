import { Flex, Text, Input, Button, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearch2Line, RiUserAddLine, } from 'react-icons/ri'

export function Header() {
    return (
        <Flex
            as="header"
            width="100%"
            maxWidth={1480}
            h="20"
            marginX="auto"
            marginTop="4"
            px="6"
            alignItems="center">                {/*dando propriedades para a tela toda*/}

            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" width="64">  {/* estilizando logo header */}
                DedSec
                <Text as="span" color="pink.500" marginLeft="1">.</Text>
            </Text>
            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                background="gray.800"
                borderRadius="full"
            >
                <Input
                    color="50"
                    variant="unstyled"
                    marginRight="4"
                    px="4"  /*serve para afastar o texto da caixa*/
                    placeholder="Buscar na plataforma"
                    _placeholder={{ color: 'gray.400' }}>

                </Input>
                <RiSearch2Line fontSize="20" />               {/*adicionando icone de pesquisa*/}
            </Flex>

            <Flex align="center" marginLeft="auto" pr="8" pt="1" borderRightWidth={1} borderColor={"gray.700"}>
                <HStack spacing="1" mx="4">
                    <Button bg="transparent" colorScheme="blackAlpha">
                        <Icon as={RiNotificationLine} fontSize="20" color="purple.500" ></Icon>
                    </Button>
                    <Button bg="transparent" colorScheme="blackAlpha">
                        <Icon as={RiUserAddLine} fontSize="20" color="purple.500" ></Icon>
                    </Button>
                </HStack>

                <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>Matthew Gomes</Text>
                        <Text color="gray.300">matthewmoralesdedsec@gmail.com</Text>
                    </Box>
                    <Avatar color="purple.500" bg="gray.400" name="Matthew Gomes"></Avatar>
                </Flex>
            </Flex>
        </Flex>
    )
}

