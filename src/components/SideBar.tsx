import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiMapPinRangeFill } from "react-icons/ri"


export function SideBar() {
    return (
        <Box as="aside" width="64" marginRight="8" >
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="black" color="gray.400" fontSize="small">GERAL</Text>
                    <Stack spacing="4" marginTop="8" align="stretch">
                        <Link display="flex" alignContent="center">
                            <Icon as={RiDashboardLine} fontSize="20" color="pink.400"></Icon>
                            <Text marginLeft="2"> Dashboard</Text>
                        </Link>
                        <Link display="flex" alignContent="center">
                            <Icon as={RiContactsLine} fontSize="20" color="pink.400"></Icon>
                            <Text marginLeft="2"> Usuários</Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="black" color="gray.400" fontSize="small">AUTOMAÇÃO</Text>
                    <Stack spacing="4" marginTop="8" align="stretch">
                        <Link display="flex" alignContent="center">
                            <Icon as={RiDashboardLine} fontSize="20" color="pink.400"></Icon>
                            <Text marginLeft="2"> Formulários</Text>
                        </Link>
                        <Link display="flex" alignContent="center">
                            <Icon as={RiGitMergeLine} fontSize="20" color="pink.400"></Icon>
                            <Text marginLeft="2"> Automação</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}