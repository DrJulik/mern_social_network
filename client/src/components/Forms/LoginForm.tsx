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
} from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <Container maxW="900px">
      <Card p={"2rem"}>
        <form>
          <FormControl mb={"1rem"}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
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

export default LoginForm;
