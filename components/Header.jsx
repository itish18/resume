import { Flex, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineLink,
} from "react-icons/ai";

import UserDetailsList from "./UserDetailsList";

const Header = () => {
  const [personal, setPersonal] = useState({});

  useEffect(() => {
    setPersonal(JSON.parse(localStorage.getItem("personal")));
  }, []);

  const {
    email,
    address,
    portLink,
    number,
    git,
    linkedin,
    twitter,
    name,
    title,
    intro,
  } = personal;

  return (
    <Flex flexDirection="row" w="full">
      <Stack
        flexDirection="column"
        w="50%"
        lineHeight={1}
        align="flex-start"
        justify="flex-start"
      >
        <Text fontSize="2em" mb="5px">
          {name}
        </Text>
        <Text fontSize="1.3em" fontWeight="500" color="grey">
          {title}
        </Text>
        <Text fontSize="0.9em" fontWeight="500">
          {intro}
        </Text>
      </Stack>
      <Stack spacing={1} w="50%" align="flex-end" p="0px" m="0px">
        {email && <UserDetailsList text={email} icon={<GrMail />} />}
        {number && <UserDetailsList text={number} icon={<BsFillPhoneFill />} />}
        {address && <UserDetailsList text={address} icon={<ImLocation />} />}
        {portLink && (
          <UserDetailsList text={portLink} icon={<AiOutlineLink />} />
        )}
        {linkedin && (
          <UserDetailsList text={linkedin} icon={<AiFillLinkedin />} />
        )}
        {git && <UserDetailsList text={git} icon={<AiFillGithub />} />}
        {twitter && (
          <UserDetailsList text={twitter} icon={<AiOutlineTwitter />} />
        )}
      </Stack>
    </Flex>
  );
};

export default Header;
