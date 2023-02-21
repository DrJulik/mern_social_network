import {
  Image,
  Avatar,
  Heading,
  Text,
  IconButton,
  Button,
  Flex,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

const FeedItem = () => {
  return (
    <Card mb={"1.5rem"} padding="1.5rem">
      <Flex mb={"1rem"}>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

          <Box>
            <Heading size="sm">Segun Adebayo</Heading>
            <Text>Creator, Chakra UI</Text>
          </Box>
        </Flex>
        <IconButton
          variant="ghost"
          colorScheme="gray"
          aria-label="See menu"
          icon={<PhoneIcon />}
        />
      </Flex>
      <Text mb="1rem">
        With Chakra UI, I wanted to sync the speed of development with the speed
        of design. I wanted the developer to be just as excited as the designer
        to create a screen.
      </Text>
      <Image
        borderRadius={"5px"}
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
      />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        pb={0}
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<PhoneIcon />}>
          Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<PhoneIcon />}>
          Comment
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<PhoneIcon />}>
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeedItem;
