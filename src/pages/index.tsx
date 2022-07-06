import { Flex, Button, FormLabel, Stack, FormControl, Heading } from "@chakra-ui/react"
import Link from "next/link"
import { Input } from "../components/Input"

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
        maxWidth={400}
        background="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"

      >

        <Stack spacing={4}>
          <div>
            <FormLabel textAlign="center" color="purple.500">
              <Heading>Login</Heading>
            </FormLabel>
          </div>
          <FormControl>
            <Input name="email" label="E-mail" type="email" />

          </FormControl>
          <Input name="Senha" label="Senha" type="password" />
        </Stack>
        <Link href="/dashboard">
          <Button type="submit" marginTop={8} colorScheme="pink">Entrar</Button>
        </Link>
      </Flex>
    </Flex>
  )
}
