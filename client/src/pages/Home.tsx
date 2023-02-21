import { Container, Flex, Box } from "@chakra-ui/react";
import Header from "../components/Header";
import AdSpace from "../components/Widgets/AdSpace";
import CreatePost from "../components/Widgets/CreatePost";
import Feed from "../components/Widgets/Feed";
import ProfileDetails from "../components/Widgets/ProfileDetails";
const Home = () => {
  return (
    <main>
      <Header />
      <Container p="2rem 0" maxW="80%">
        <Flex justify="space-between">
          <Box flexBasis="26%">
            <ProfileDetails />
          </Box>
          <Box flexBasis="42%">
            <Box mb="2rem">
              <CreatePost />
            </Box>
            <Box>
              <Feed />
            </Box>
          </Box>
          <Box flexBasis="26%">
            <AdSpace />
          </Box>
        </Flex>
      </Container>
    </main>
  );
};

export default Home;
