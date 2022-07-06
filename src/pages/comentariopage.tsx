
import { Flex, HStack, Text } from "@chakra-ui/react";
import { Comentario } from "../components/Comentario";


export default function ComentarioPage() {
    return (
        <Flex direction="column">
            <Flex alignItems="center" direction="column" gap="2">
                <Text>Comentários</Text>
                <Comentario />
                <HStack mt="3" w="800px" border="1px solid gray"></HStack>
            </Flex>

        </Flex>

    )
}