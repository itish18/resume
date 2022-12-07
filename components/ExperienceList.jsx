import { Flex, Text } from "@chakra-ui/react";

const ExperienceList = ({ exp }) => {
  const { org, pos, dur, des } = exp;
  return (
    <Flex flexDirection="column">
      <Text fontSize="1em" fontWeight="500">
        {org}
      </Text>
      <Flex
        align="center"
        justify="space-between"
        fontSize="0.9em"
        color="grey"
        fontStyle="italic"
      >
        <Text>{pos}</Text>
        <Text>{dur} Months</Text>
      </Flex>

      <Text ml="1em" fontSize="0.9em">
        {des}
      </Text>
    </Flex>
  );
};

export default ExperienceList;
