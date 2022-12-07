import { Flex, Box } from "@chakra-ui/react";
import { MdTitle, MdOutlineDescription } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";

import Container from "../components/Container";
import InputComponent from "../components/InputComponent";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const inputs = [
  {
    id: 1,
    label: "Title",
    type: "text",
    name: "title",
    leftElement: <MdTitle color="grey" />,
  },
  {
    id: 2,
    label: "Link",
    type: "url",
    name: "link",
    leftElement: <AiOutlineLink color="grey" />,
  },
  {
    id: 3,
    label: "Description",
    type: "text",
    name: "des",
    leftElement: <MdOutlineDescription color="grey" />,
  },
];

const ProjectsPage = () => {
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();

    const project1 = {
      title: e.target.title1.value,
      link: e.target.link1.value,
      desc: e.target.des1.value,
    };
    const project2 = {
      title: e.target.title2.value,
      link: e.target.link2.value,
      desc: e.target.des2.value,
    };
    const project3 = {
      title: e.target.title3.value,
      link: e.target.link3.value,
      desc: e.target.des3.value,
    };

    const data = {
      project1,
      project2,
      project3,
    };

    localStorage.setItem("projects", JSON.stringify(data));

    router.push("/extra");
  };
  const content1 = inputs.map((i) => (
    <InputComponent
      key={i.id}
      label={i.label}
      type={i.type}
      name={`${i.name}1`}
      leftElement={i.leftElement}
      maxW={i.id === 3 ? "full" : "20em"}
    />
  ));

  const content2 = inputs.map((i) => (
    <InputComponent
      key={i.id}
      label={i.label}
      type={i.type}
      name={`${i.name}2`}
      leftElement={i.leftElement}
      maxW={i.id === 3 ? "full" : "20em"}
    />
  ));

  const content3 = inputs.map((i) => (
    <InputComponent
      key={i.id}
      label={i.label}
      type={i.type}
      name={`${i.name}3`}
      leftElement={i.leftElement}
      maxW={i.id === 3 ? "full" : "20em"}
    />
  ));
  return (
    <Container
      submitHandler={submitHandler}
      maxW="50em"
      heading="projects"
      showNav={true}
    >
      <Flex flexDirection="row" flexWrap="wrap" gap="1em 5.5em" align="center">
        {content1}
        <Box w="full" h="1px" m="1em" bg="lightGrey"></Box>
        {content2}
        <Box w="full" h="1px" m="1em" bg="lightGrey"></Box>
        {content3}
      </Flex>
      <Footer num={4} link="/experience" />
    </Container>
  );
};

export default ProjectsPage;
