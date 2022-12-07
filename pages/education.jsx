import { Flex, Box } from "@chakra-ui/react";

import InputComponent from "../components/InputComponent";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const inputs = [
  {
    id: 1,
    label: "School/College/University",
    type: "text",
    name: "college",

    required: true,
  },
  {
    id: 2,
    label: "Qualification",
    type: "text",
    name: "qualification",
    required: true,
  },
  {
    id: 3,
    label: "From",
    type: "date",
    name: "from",
    required: true,
  },
  {
    id: 4,
    label: "To",
    type: "date",
    name: "to",
    required: true,
  },
  {
    id: 5,
    label: "Marks(in percentage)",
    type: "number",
    name: "marks",
    required: true,
  },
];

const EducationPage = () => {
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    const education1 = {
      college: e.target.college1.value,
      qualification: e.target.qualification1.value,
      from: e.target.from1.value,
      to: e.target.to1.value,
      marks: e.target.marks1.value,
    };
    const education2 = {
      college: e.target.college2.value,
      qualification: e.target.qualification2.value,
      from: e.target.from2.value,
      to: e.target.to2.value,
      marks: e.target.marks2.value,
    };
    const education3 = {
      college: e.target.college3.value,
      qualification: e.target.qualification3.value,
      from: e.target.from3.value,
      to: e.target.to3.value,
      marks: e.target.marks3.value,
    };

    const data = {
      education1,
      education2,
      education3,
    };
    localStorage.setItem("education", JSON.stringify(data));

    router.push("/experience");
  };

  const content1 = inputs.map((i) => (
    <InputComponent
      key={i.id}
      label={i.label}
      type={i.type}
      required={i.required}
      name={`${i.name}1`}
      maxW="15em"
    />
  ));

  const content2 = inputs.map((i) => (
    <InputComponent
      key={i.id}
      label={i.label}
      type={i.type}
      required={i.required}
      name={`${i.name}2`}
      maxW="15em"
    />
  ));

  const content3 = inputs.map((i) => (
    <InputComponent
      key={i.id}
      label={i.label}
      type={i.type}
      // required={i.required}
      name={`${i.name}3`}
      maxW="15em"
    />
  ));

  return (
    <Container
      submitHandler={submitHandler}
      maxW="60em"
      heading="education"
      showNav={true}
    >
      <Flex flexDirection="row" flexWrap="wrap" gap="1em 5.5em" align="center">
        {content1}
        <Box w="full" h="1px" m="1em" bg="lightGrey"></Box>
        {content2}
        <Box w="full" h="1px" m="1em" bg="lightGrey"></Box>
        {content3}
      </Flex>
      <Footer num={2} link="/" />
    </Container>
  );
};

export default EducationPage;
