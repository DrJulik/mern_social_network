import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const ProfileDetails = () => {
  return (
    <Card maxW="100%">
      <CardBody align="center" justify="center">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="full"
          boxSize="8rem"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Julius Sozin</Heading>
          <Text>Lover of all things green. Hater of all things red.</Text>
          <Divider />
          <Text>Location</Text>
          <Text>Job</Text>
          <Divider />
          <Text>Other socials</Text>
          <Text>Twitter</Text>
          <Text>LinkedIn</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProfileDetails;
