import { Flex, Input, Button, FormLabel, Stack } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"

    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        background="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"

      >

        <Stack spacing={4}>
          <Stack spacing={0}>
            <FormLabel htmlFor="Email" >Email</FormLabel>4
            <Input
              id="email"
              name="email"
              type="email"
              focusBorderColor="purple.500"
              background="gray.900"
              size="md"
            />
          </Stack>
          <Stack spacing={0}>
            <FormLabel htmlFor="password" >Senha</FormLabel>
            <Input
              name="senha"
              id="password"
              type="password"
              focusBorderColor="purple.500"
              background="gray.900"
              size="md"
            />
          </Stack>
        </Stack>
        <Button type="submit" marginTop={4} colorScheme="purple">Entrar</Button>
      </Flex>
    </Flex>
  )
}
