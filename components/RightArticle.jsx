import { Flex, Box } from "@chakra-ui/react";
import Experience from "./Experience";

import { Skills } from "./Skills";

const RightArticle = () => {
  return (
    <Flex direction="column" w="50%">
      <Skills />
      <Box h="2em"></Box>
      <Experience />
    </Flex>
  );
};

export default RightArticle;
