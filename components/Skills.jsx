import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SkillsList from "./SkillsList";

export const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(JSON.parse(localStorage.getItem("skill")));
  }, []);

  const { skill1, skill2, skill3, skill4, skill5, skill6 } = skills;

  return (
    <>
      {(skill1 || skill2 || skill3 || skill4 || skill5 || skill6) && (
        <Text
          fontSize="1.3em"
          fontWeight="600"
          textTransform="uppercase"
          textDecoration="underline"
          m="0px"
          p="0px"
        >
          Skills
        </Text>
      )}
      <Flex direction="row" align="center" mt="10px" flexWrap="wrap" gap="5px">
        {skill1 && <SkillsList skill={skill1} />}
        {skill2 && <SkillsList skill={skill2} />}
        {skill3 && <SkillsList skill={skill3} />}
        {skill4 && <SkillsList skill={skill4} />}
        {skill5 && <SkillsList skill={skill5} />}
        {skill6 && <SkillsList skill={skill6} />}
      </Flex>
    </>
  );
};
