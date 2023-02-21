import {
  Button,
  Card,
  Divider,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
const CreatePost = () => {
  return (
    <Card p="1rem">
      <Flex>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="full"
          boxSize="3rem"
          mr="1rem"
        />
        <Input placeholder="Some things are better left unsaid..." size="lg" />
      </Flex>
      <Divider my="1rem" />
      <Flex justify={"space-around"}>
        <Flex align={"center"}>
          <AttachmentIcon mr={1.5} />
          <Text>Image</Text>
        </Flex>
        <Flex align={"center"}>
          <AttachmentIcon mr={1.5} />
          <Text>Clip</Text>
        </Flex>
        <Flex align={"center"}>
          <AttachmentIcon mr={1.5} />
          <Text>Attachment</Text>
        </Flex>
        <Flex align={"center"}>
          <AttachmentIcon mr={1.5} />
          <Text>Audio</Text>
        </Flex>

        <Button>Post</Button>
      </Flex>
    </Card>
  );
};

export default CreatePost;
