import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Card,
  Container,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";

const RegistrationForm = () => {
  return (
    <Container maxW="900px">
      <Card p={"2rem"}>
        <Text mb={"1rem"}>
          We will absolutely never sell or lose your data, how dare you!
        </Text>
        <form>
          <Flex>
            <FormControl mr="1rem" mb={"1rem"}>
              <FormLabel>First Name</FormLabel>
              <Input type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Last name</FormLabel>
              <Input type="email" />
              <FormHelperText>
                We'll totally never going to get hacked.
              </FormHelperText>
            </FormControl>
          </Flex>

          <FormControl>
            <FormLabel>Location</FormLabel>
            <Input type="email" />
            <FormHelperText>
              We'll totally never going to get hacked.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Ocupation</FormLabel>
            <Input type="email" />
            <FormHelperText>
              We'll totally never going to get hacked.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Image</FormLabel>
            <Input type="email" />
            <FormHelperText>
              We'll totally never going to get hacked.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
            <FormHelperText>
              We'll totally never going to get hacked.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="email" />
            <FormHelperText>
              We'll totally never going to get hacked.
            </FormHelperText>
          </FormControl>
        </form>
        <Button my="1rem">Login</Button>
        <Text>Don't have an account? Click here to register</Text>
      </Card>
    </Container>
  );
};

export default RegistrationForm;
