import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import LoginForm from "../components/Forms/LoginForm";
import RegistrationForm from "../components/Forms/RegistrationForm";
import Header from "../components/Header";

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  return (
    <main>
      <Header />
      <Container
        p="2rem 0"
        maxW="80%"
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Box>{isRegistered ? <RegistrationForm /> : <LoginForm />}</Box>
      </Container>
    </main>
  );
};

export default Login;
