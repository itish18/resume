import { Flex } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { TfiWorld } from "react-icons/tfi";
import { MdTitle } from "react-icons/md";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillHome,
} from "react-icons/ai";
import { useRouter } from "next/router";

import Container from "../components/Container";
import InputComponent from "../components/InputComponent";
import Footer from "../components/Footer";

const inputs = [
  {
    id: 1,
    label: "First Name",
    type: "text",
    name: "fName",
    value: "",
    required: true,
  },
  {
    id: 2,
    label: "Last Name",
    type: "text",
    name: "lName",
    value: "",
    required: true,
  },
  {
    id: 9,
    label: "Email",
    type: "email",
    name: "email",
    value: "",
    leftElement: <EmailIcon color="grey" />,
    required: true,
  },
  {
    id: 8,
    label: "Title",
    type: "text",
    name: "title",
    value: "",
    leftElement: <MdTitle color="grey" />,
    required: true,
  },
  {
    id: 3,
    label: "Phone number",
    type: "number",
    name: "number",
    value: "",
    leftElement: <PhoneIcon color="grey" />,
    required: false,
  },
  {
    id: 4,
    label: "Your portfolio link",
    type: "url",
    name: "portLink",
    value: "",
    leftElement: <TfiWorld color="grey" />,
    required: false,
  },
  {
    id: 5,
    label: "Github",
    type: "text",
    name: "git",
    value: "",
    leftElement: <AiFillGithub color="grey" />,
    required: false,
  },
  {
    id: 6,
    label: "Linked In",
    type: "text",
    name: "linkedin",
    value: "",
    leftElement: <AiFillLinkedin color="grey" />,
    required: false,
  },
  {
    id: 7,
    label: "Twitter",
    type: "text",
    name: "twitter",
    value: "",
    leftElement: <AiOutlineTwitter color="grey" />,
    required: false,
  },
  {
    id: 10,
    label: "Address",
    type: "text",
    name: "address",
    value: "",
    leftElement: <AiFillHome color="grey" />,
  },
  {
    id: 11,
    label: "Something about yourself",
    type: "text",
    name: "intro",
    value: "",
    leftElement: <MdTitle color="grey" />,
    required: true,
  },
];

const PersonalPage = () => {
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.fName.value + " " + e.target.lName.value,
      email: e.target.email.value,
      number: e.target.number.value,
      portLink: e.target.portLink.value,
      git: e.target.git.value,
      linkedin: e.target.linkedin.value,
      twitter: e.target.twitter.value,
      address: e.target.address.value,
      title: e.target.title.value,
      intro: e.target.intro.value,
    };

    localStorage.setItem("personal", JSON.stringify(data));

    router.push("/education");
  };
  return (
    <Container
      submitHandler={submitHandler}
      heading="personal details"
      showNav={true}
    >
      <Flex flexDirection="row" flexWrap="wrap" gap="1em 5.5em" align="center">
        {inputs.map((i) => (
          <InputComponent
            key={i.id}
            label={i.label}
            type={i.type}
            leftElement={i.leftElement}
            required={i.required}
            name={i.name}
            maxW={i.id === 11 ? "full" : "15em"}
          />
        ))}
      </Flex>

      <Footer num={1} />
    </Container>
  );
};

export default PersonalPage;
