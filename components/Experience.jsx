import { Stack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import ExperienceList from "./ExperienceList";

const Experience = () => {
  const [exp, setExp] = useState({});

  useEffect(() => {
    setExp(JSON.parse(localStorage.getItem("experience")));
  }, []);

  const { exp1, exp2, exp3 } = exp;

  return (
    <>
      {(exp1?.org || exp2?.org || exp3?.org) && (
        <Text
          fontSize="1.3em"
          fontWeight="600"
          textTransform="uppercase"
          textDecoration="underline"
          m="0px"
          p="0px"
        >
          Experience
        </Text>
      )}
      <Stack spacing={3} mt="10px">
        {exp1?.org && <ExperienceList exp={exp1} />}
        {exp2?.org && <ExperienceList exp={exp2} />}
        {exp3?.org && <ExperienceList exp={exp3} />}
      </Stack>
    </>
  );
};

export default Experience;
