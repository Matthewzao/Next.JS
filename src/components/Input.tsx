import { FormControl, FormLabel, Input as ChakraInput } from "@chakra-ui/react";


interface InputProps {
    name?: string;
    label?: string;
    type?: string;
}


export function Input({ name, label, type }: InputProps) {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                id={name}
                name={name}
                type={type}
                focusBorderColor="purple.500"
                background="gray.900"
                size="md"
            />
        </FormControl>
    )
}