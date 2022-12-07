import { Flex } from "@chakra-ui/react";

import Container from "../components/Container";
import InputComponent from "../components/InputComponent";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const ExtraPage = () => {
  const router = useRouter();
  const skills = [];

  for (let i = 1; i <= 6; i++) {
    skills.push(
      <InputComponent
        key={i}
        label={`Skill${i}`}
        name={`skill${i}`}
        type="text"
        maxW="15em"
      />
    );
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const skill = {
      skill1: e.target.skill1.value,
      skill2: e.target.skill2.value,
      skill3: e.target.skill3.value,
      skill4: e.target.skill4.value,
      skill5: e.target.skill5.value,
      skill6: e.target.skill6.value,
    };

    localStorage.setItem("skill", JSON.stringify(skill));

    router.push("/resume");
  };
  return (
    <Container
      submitHandler={submitHandler}
      maxW="60em"
      showNav={true}
      heading="skills & interests"
    >
      <Flex flexDirection="row" flexWrap="wrap" gap="1em 5.5em" align="center">
        {skills.map((i) => {
          return i;
        })}
      </Flex>

      <Footer num={5} link="/projects" />
    </Container>
  );
};

export default ExtraPage;
