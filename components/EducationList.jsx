import { Flex, Text } from "@chakra-ui/react";

const EducationList = ({ education }) => {
  const { college, from, to, qualification, marks } = education;

  return (
    <Flex flexDirection="column">
      <Text fontSize="1.1em" fontWeight="600" textTransform="uppercase">
        {qualification}
      </Text>
      <Text fontSize="1.1em" fontWeight="500" textTransform="uppercase">
        {college}
      </Text>
      <Flex
        align="center"
        justify="space-between"
        w="full"
        fontSize="0.9em"
        color="grey"
        fontWeight="400"
        fontStyle="italic"
      >
        <Text>
          {new Date(from).getFullYear()} - {new Date(to).getFullYear()}
        </Text>
        <Text>{marks}%</Text>
      </Flex>
    </Flex>
  );
};

export default EducationList;
