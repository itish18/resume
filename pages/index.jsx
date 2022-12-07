import { Flex, Text, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Container from "../components/Container";

const Index = () => {
  const router = useRouter();
  return (
    <Container
      heading="Resume builder"
      showNav={true}
      maxW="100vw"
      w="100vw"
      h="auto"
    >
      <Flex>
        <Flex
          flexDirection="column"
          align="flex-start"
          justify="flex-start"
          gap="2rem 0rem"
          w="50%"
          mt="2%"
        >
          <Text fontSize="5xl" fontWeight="400">
            Get a job ready resume for your next interview.
          </Text>
          <Button
            bg="black"
            p="1rem"
            color="white"
            border="1px solid black"
            fontWeight="400"
            fontSize="1.2rem"
            _hover={{ bg: "white", color: "black" }}
            onClick={() => router.push("/personal")}
          >
            Create
          </Button>
        </Flex>
        <Flex
          flexDirection="column"
          justify="flex-end"
          align="flex-end"
          w="50%"
        >
          <Box
            width="40vw"
            height="80vh"
            bg="no-repeat"
            bgImage="/Capture.JPG"
            borderRadius="lg"
            boxShadow="inset 0px -53px 68px 17px rgba(0,0,0,1)"
          ></Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
