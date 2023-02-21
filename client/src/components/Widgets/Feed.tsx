import { Box } from "@chakra-ui/react";
import FeedItem from "./Feed/FeedItem";
const Feed = () => {
  return (
    <Box maxW="100%">
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </Box>
  );
};

export default Feed;
