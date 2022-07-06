import { SimpleGrid, Box, Text, Flex, Button, Avatar, Icon, Input, FormControl, HStack } from "@chakra-ui/react"
import { RiAddLine, RiDislikeLine, RiHeartFill, RiHeartsLine, RiLinkedinBoxFill } from "react-icons/ri";

export function Comentario() {
    return (
        <SimpleGrid justifyContent="center">
            <Box borderRadius="5" marginTop="10" width="500px">
                <Flex direction="column">
                    <Flex gap="3" direction="row">
                        <Avatar></Avatar>
                        <Flex direction="column">
                            <Text fontSize="lg" fontWeight="bold">Matthew</Text>
                            <FormControl>
                                <Input variant='flushed' placeholder='Comente algo...' />
                                {/* <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eveniet quo voluptatibus, libero amet itaque dolor animi labore facilis tenetur architecto quam ex harum aperiam reprehenderit dicta et minus atque?</Text> */}

                            </FormControl>
                            <Flex gap="6" direction="row">
                                <Button _active={{ color: "blue.200" }} _hover={{ bg: "none", color: "blue" }} bg="none" m="0" p="0" maxH="fit-content" maxW="fit-content" w="30px" h="30px"><Icon fontSize="20px" as={RiHeartFill}></Icon></Button>
                                <Button _active={{ color: "pink" }} _hover={{ bg: "none", color: "pink.600" }} bg="none" m="0" p="0" maxH="fit-content" maxW="fit-content" w="30px" h="30px"><Icon fontSize="20px" as={RiDislikeLine}></Icon></Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>

        </SimpleGrid >
    )
}