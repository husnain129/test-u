import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import LoginSchema from '../utils/form-validation';

const Login = () => {
  return (
    <Flex
      w="full"
      h="full"
      flexDir={'column'}
      alignItems="center"
      justifyContent={'center'}
      gap="1em"
    >
      <Flex
        flexDir={'column'}
        alignItems="center"
        justifyContent={'center'}
        w="26.4em"
        minH="25em"
        bg="white"
        borderRadius=".4em"
        gap={'2em'}
        py="2em"
      >
        <Text as={'h1'} fontSize="1.3em" fontWeight={'semibold'}>
          Sign in with your email address
        </Text>
        <Box rounded="md">
          <Formik
            initialValues={{
              email: '',
              password: '',
              rememberMe: false,
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Field
                      w="20em"
                      h="2.4em"
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="outline"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && !!touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      w="20em"
                      h="2.4em"
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      variant="outline"
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                  <Field
                    as={Checkbox}
                    id="rememberMe"
                    name="rememberMe"
                    colorScheme="purple"
                  >
                    Remember me?
                  </Field>
                  <Button type="submit" colorScheme="purple" width="full">
                    Login
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
        {/* <Flex>
          <Input type={'text'} />
          <Input type={'password'} />
          <Button>Continue</Button>
        </Flex> */}
      </Flex>
      <Flex flexDir={'column'} gap=".2em" w="26.4em" alignItems={'flex-start'}>
        <Flex gap={'.3em'}>
          <Text fontSize={'.9em'}>{`Don't`} have an account?</Text>
          <Text fontSize={'.9em'} cursor="pointer" color={'#b0b7cb'}>
            SignUp
          </Text>
        </Flex>
        <Text fontSize={'.9em'} cursor="pointer" color="#b0b7cb">
          Forgot your password?
        </Text>
      </Flex>
    </Flex>
  );
};

export default Login;
