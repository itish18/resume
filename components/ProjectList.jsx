import { Text, Flex } from "@chakra-ui/react";

const ProjectList = ({ project }) => {
  const { title, link, desc } = project;
  const linkClick = () => {
    window.open(link);
  };
  return (
    <Flex flexDirection="column">
      <Text fontSize="1em" fontWeight="500">
        {title}
      </Text>
      <Text
        fontSize="0.9em"
        color="blue"
        fontWeight="500"
        onClick={linkClick}
        _hover={{ cursor: "pointer" }}
      >
        {link}
      </Text>
      <Text ml="1em" fontSize="0.9em">
        {desc}
      </Text>
    </Flex>
  );
};

export default ProjectList;
