import { Flex, ChakraProvider, Text, Box } from "@chakra-ui/react";
import { Fragment } from "react";
import Head from "next/head";

const Container = ({
  children,
  submitHandler,
  maxW,
  heading,
  h,
  w,
  showNav,
}) => {
  return (
    <ChakraProvider>
      <Fragment>
        <Head>
          <title>Resume Builder</title>
          <meta name="description" content="resume" />
        </Head>
        <Flex align="center" justify="center" flexDirection="column">
          {showNav && (
            <>
              <Text
                fontSize="2em"
                color="black"
                fontWeight="100"
                lineHeight="1em"
                letterSpacing="0.7em"
                textTransform="uppercase"
                p="0.6em"
                w="full"
                textAlign="center"
              >
                {heading}
              </Text>

              <Box bg="black" h="1px" w="full"></Box>
            </>
          )}
          <Flex
            align="center"
            justify="center"
            flexDirection="column"
            h={h ? h : "90vh"}
            w={w ? w : "auto"}
          >
            <Flex
              bg="white"
              borderRadius="2em"
              boxShadow="xl"
              flexDirection="column"
              p="2em"
              maxW={maxW ? maxW : "40em"}
              align="center"
              gap="2em 0em"
              as="form"
              onSubmit={submitHandler}
            >
              {children}
            </Flex>
          </Flex>
        </Flex>
      </Fragment>
    </ChakraProvider>
  );
};

export default Container;
