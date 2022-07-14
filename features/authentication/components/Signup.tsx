import { UserActions } from '@/redux/actions/user';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { User } from '@prisma/client';
import { Field, Formik } from 'formik';
import { useRouter } from 'next/router';
import toastConfig from 'utils/toast-config';
import { SignupSchema } from '../utils/form-validation';

const Signup = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.user);
  const toast = useToast();
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
          Create New Account
        </Text>
        <Box rounded="md">
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              role: 'STUDENT',
            }}
            validationSchema={SignupSchema}
            onSubmit={({
              email,
              name,
              password,
              role,
            }: Omit<User, 'id' | 'createdAt'>) => {
              dispatch(UserActions.signup({ email, name, password, role }));
              toast(
                toastConfig({
                  action: error ? 'error' : 'success',
                  message: error ? 'error' : 'Successfully created account',
                })
              );
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Field
                      w="20em"
                      h="2.4em"
                      as={Input}
                      id="name"
                      name="name"
                      type="text"
                      variant="outline"
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
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
                  <RadioGroup display={'flex'} gap="1em">
                    <label>
                      <Field
                        as={Radio}
                        id="STUDENT"
                        name="STUDENT"
                        colorScheme="purple"
                        value="STUDENT"
                      >
                        Student
                      </Field>
                    </label>
                    <label>
                      <Field
                        as={Radio}
                        id="TUTOR"
                        name="TUTOR"
                        colorScheme="purple"
                        value="TUTOR"
                      >
                        Tutor
                      </Field>
                    </label>
                  </RadioGroup>
                  <Button
                    isLoading={loading}
                    type="submit"
                    colorScheme="purple"
                    width="full"
                  >
                    Signup
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
      <Flex flexDir={'column'} gap=".2em" w="26.4em" alignItems={'flex-start'}>
        <Flex gap={'.3em'}>
          <Text fontSize={'.9em'}>Already have an account?</Text>
          <Text
            onClick={() => router.push('/login')}
            fontSize={'.9em'}
            cursor="pointer"
            color={'#b0b7cb'}
          >
            SignIn
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Signup;
