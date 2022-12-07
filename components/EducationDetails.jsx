import { Text, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import EducationList from "./EducationList";

const EducationDetails = () => {
  const [education, setEducation] = useState({});

  const { education1, education2, education3 } = education;

  useEffect(() => {
    setEducation(JSON.parse(localStorage.getItem("education")));
  }, []);

  return (
    <>
      <Text
        fontSize="1.3em"
        fontWeight="600"
        textTransform="uppercase"
        textDecoration="underline"
        m="0px"
        p="0px"
      >
        Education
      </Text>
      <Stack spacing={3} mt="10px">
        {education1?.college && <EducationList education={education1} />}
        {education2?.college && <EducationList education={education2} />}
        {education3?.college && <EducationList education={education3} />}
      </Stack>
    </>
  );
};

export default EducationDetails;
