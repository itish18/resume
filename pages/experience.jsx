import { Flex, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CgOrganisation } from "react-icons/cg";
import { GiDuration } from "react-icons/gi";
import { MdOutlineDescription } from "react-icons/md";

import InputComponent from "../components/InputComponent";
import Container from "../components/Container";
import Footer from "../components/Footer";

const inputs = [
  {
    id: 1,
    label: "Institute/Organization",
    type: "text",
    name: "org",
    leftElement: <CgOrganisation color="grey" />,
  },
  {
    id: 2,
    label: "Position",
    type: "text",
    name: "pos",
  },
  {
    id: 3,
    label: "Duration(Months)",
    type: "number",
    name: "dur",
    leftElement: <GiDuration color="grey" />,
  },
  {
    id: 4,
    label: "Description",
    type: "textArea",
    name: "des",
    leftElement: <MdOutlineDescription color="grey" />,
  },
];

const ExperiencePage = () => {
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();

    const exp1 = {
      org: e.target.org1.value,
      pos: e.target.pos1.value,
      dur: e.target.dur1.value,
      des: e.target.des1.value,
    };
    const exp2 = {
      org: e.target.org2.value,
      pos: e.target.pos2.value,
      dur: e.target.dur2.value,
      des: e.target.des2.value,
    };
    const exp3 = {
      org: e.target.org3.value,
      pos: e.target.pos3.value,
      dur: e.target.dur3.value,
      des: e.target.des3.value,
    };

    const data = {
      exp1,
      exp2,
      exp3,
    };

    localStorage.setItem("experience", JSON.stringify(data));

    router.push("/projects");
  };

  const content1 = inputs.map((i) => (
    <InputComponent
      key={i.id}
      label={i.label}
      type={i.type}
      required={i.required}
      name={`${i.name}1`}
      leftElement={i.leftElement}
      maxW={i.id === 4 ? "full" : "15em"}
    />
  ));

  const content2 = inputs.map((i) => (
    <InputComponent
      key={i.id}
      label={i.label}
      type={i.type}
      required={i.required}
      name={`${i.name}2`}
      leftElement={i.leftElement}
      maxW={i.id === 4 ? "full" : "15em"}
    />
  ));

  const content3 = inputs.map((i) => (
    <InputComponent
      key={i.id}
      label={i.label}
      type={i.type}
      name={`${i.name}3`}
      leftElement={i.leftElement}
      maxW={i.id === 4 ? "full" : "15em"}
    />
  ));
  return (
    <Container
      submitHandler={submitHandler}
      maxW="60em"
      heading="experience"
      showNav={true}
    >
      <Flex flexDirection="row" flexWrap="wrap" gap="1em 5.5em" align="center">
        {content1}
        <Box w="full" h="1px" m="1em" bg="lightGrey"></Box>
        {content2}
        <Box w="full" h="1px" m="1em" bg="lightGrey"></Box>
        {content3}
      </Flex>
      <Footer num={3} link="/education" />
    </Container>
  );
};

export default ExperiencePage;
