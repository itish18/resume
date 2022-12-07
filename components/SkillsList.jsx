import { Text } from "@chakra-ui/react";

const SkillsList = ({ skill }) => {
  return (
    <Text p="7px" border="none" bg="grey" color="white" borderRadius="md">
      {skill}
    </Text>
  );
};

export default SkillsList;
