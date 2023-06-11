import { useState } from 'react';
import {
    Button,
    Flex,
    FormControl,
    Input,
    Link,
    Stack,
    Text,
    Box,
    Center,
} from '@chakra-ui/react';
import { LockIcon, AtSignIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { login } from '../../services/api';
import img from '../../assets/img.png';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState('');
    const [erroMessage, setErroMensage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await login(email, password);
            console.log(response);
            if (!response.validate) {
                setErroMensage(
                    'Email ou senha inválidos. Por favor, tente novamente.'
                );
            }
            if (response.validate) {
                navigate('/');
            }
        } catch (error) {
            setIsValid(false);
            alert('Erro ao fazer login. Por favor, tente novamente.');
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Box>
                        <Center><img
                            src={img}
                            alt="logo da Ferreira Costa"
                            width={200}
                            height={200}
                            display="flex"
                        />
                        </Center>
                    </Box>
                    <FormControl id="email" >
                        <Input
                            border='none'
                            type="email"
                            value={email}
                            placeholder="Usuário"
                            fontSize="14px"
                            bg="#F3F3F3"
                            focusBorderColor="red"
                            onChange={(e) => setEmail(e.target.value)}
                            _placeholder={{
                                position: 'relative',
                            }}

                            paddingLeft="2.0rem"
                        />
                        <AtSignIcon
                            position="absolute"
                            left={2}
                            top="50%"
                            transform="translateY(-50%)"
                            color="gray.400"
                        />
                    </FormControl>
                    <FormControl id="password">
                        <Input
                            border='none'
                            type="password"
                            value={password}
                            placeholder="Senha"
                            fontSize="14px"
                            bg="#F3F3F3"
                            focusBorderColor="red"
                            onChange={(e) => setPassword(e.target.value)}
                            _placeholder={{
                                position: 'relative',
                            }}

                            paddingLeft="2.0rem"
                        />
                        <LockIcon
                            position="absolute"
                            left={2}
                            top="50%"
                            transform="translateY(-50%)"
                            color="gray.400"
                        />
                    </FormControl>
                    {!isValid && (
                        <Text color="#E71D35" fontSize="sm" mb={3}>
                            {erroMessage}
                        </Text>
                    )}
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}
                        >
                            <Box></Box>
                            <Link
                                textDecoration="underline"
                                color="#9C9C9C"
                                fontSize="12px"
                                mt={-6}
                                mb={-3}
                            >
                                Esqueci minha senha
                            </Link>
                        </Stack>

                        <Button
                            width="110px"
                            mb={5}
                            ml={170}
                            bg="#579C24"
                            color="white"
                            variant="solid"
                            as={RouterLink}
                            onClick={handleLogin}
                            _hover={{
                                opacity: 0.8,
                            }}
                        >
                            ENTRAR
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </Stack>
    );
}
