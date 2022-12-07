import { Flex, Box } from "@chakra-ui/react";

import EducationDetails from "./EducationDetails";
import Projects from "./Projects";

const LeftArticle = () => {
  return (
    <Flex direction="column" w="50%">
      <EducationDetails />
      <Box h="2em"></Box>
      <Projects />
    </Flex>
  );
};

export default LeftArticle;
