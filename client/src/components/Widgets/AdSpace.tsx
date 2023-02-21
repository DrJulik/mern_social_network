import { Flex, Card, Text, Image } from "@chakra-ui/react";
const AdSpace = () => {
  return (
    <Card p="1rem">
      <Flex mb={"1rem"} justify={"space-between"}>
        <Text>Sponsored</Text>
        <Text>Create Ad</Text>
      </Flex>
      <Image
        mb="1rem"
        borderRadius={"5px"}
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
      />
      <Flex mb={"1rem"} justify={"space-between"}>
        <Text>Julius's pinboards</Text>
        <Text>pinboards.com</Text>
      </Flex>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
        repudiandae!
      </Text>
    </Card>
  );
};

export default AdSpace;
