import { Flex, Text } from "@chakra-ui/react";

const UserDetailsList = ({ text, icon }) => {
  return (
    <Flex flexDirection="row" align="center" justify="flex-end" gap="0px 10px">
      <Text>{text}</Text>
      {icon}
    </Flex>
  );
};

export default UserDetailsList;
