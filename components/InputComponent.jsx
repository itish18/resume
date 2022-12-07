import {
  Input,
  FormControl,
  FormLabel,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

const InputComponent = ({ name, label, type, leftElement, required, maxW }) => {
  return (
    <FormControl isRequired={required} maxW={maxW ? maxW : "auto"}>
      <FormLabel>{label}</FormLabel>
      {leftElement ? (
        <InputGroup>
          <InputLeftElement pointerEvents="tel">{leftElement}</InputLeftElement>
          <Input type={type} name={name} />
        </InputGroup>
      ) : (
        <Input type={type} name={name} />
      )}
    </FormControl>
  );
};

export default InputComponent;
