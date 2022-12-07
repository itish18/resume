import { Flex, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Footer = ({ num, link }) => {
  const router = useRouter();
  return (
    <Flex flexDirection="column" gap="1em 0em">
      <Flex flexDirection="row" align="center" gap="0em 5.5em">
        <Button
          bg="black"
          color="white"
          _hover={{ opacity: "70%" }}
          disabled={num === 1}
          onClick={() => link && router.push(link)}
        >
          Back
        </Button>

        <Button
          bg="black"
          color="white"
          _hover={{ opacity: "70%" }}
          type="submit"
        >
          Next
        </Button>
      </Flex>
      <Text fontSize="0.7em" color="grey" textAlign="center" maxW="full">
        Page {num}
      </Text>
    </Flex>
  );
};

export default Footer;
