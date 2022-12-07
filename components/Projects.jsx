import { Flex, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProjectList from "./ProjectList";

const Projects = () => {
  const [projects, setProjects] = useState({});

  useEffect(() => {
    setProjects(JSON.parse(localStorage.getItem("projects")));
  }, []);

  const { project1, project2, project3 } = projects;

  return (
    <>
      {(project1?.title || project2?.title || project3?.title) && (
        <Text
          fontSize="1.3em"
          fontWeight="600"
          textTransform="uppercase"
          textDecoration="underline"
          m="0px"
          p="0px"
        >
          Projects
        </Text>
      )}
      <Stack spacing={3} mt="10px">
        {project1?.title && <ProjectList project={project1} />}
        {project2?.title && <ProjectList project={project2} />}
        {project3?.title && <ProjectList project={project3} />}
      </Stack>
    </>
  );
};

export default Projects;
