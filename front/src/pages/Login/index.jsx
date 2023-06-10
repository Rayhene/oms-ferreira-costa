import { useState } from 'react';
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Text,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { login } from '../../services/api';


export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState('');
    const [erroMessage, setErroMensage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await login(email, password);
            console.log(response)
            if (!response.validate) {
                setErroMensage("Email ou senha inválidos. Por favor, tente novamente.")
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
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Login</Heading>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Senha</FormLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    {!isValid && (
                        <Text color="red.500" fontSize="sm">
                            {erroMessage}
                        </Text>
                    )}
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}
                        >
                            <Checkbox>Lembre-me</Checkbox>
                            {/* <Link color={'red.500'}>Esqueceu sua senha?</Link> */}
                        </Stack>
                        <Button
                            colorScheme="red"
                            variant="solid"
                            as={RouterLink}
                            onClick={handleLogin}
                        >
                            Entrar
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://yt3.googleusercontent.com/ytc/AGIKgqNQKde8656syVvSNWq_-pNEiXrHPVt5HqpoARQdHg=s900-c-k-c0x00ffffff-no-rj'
                    }
                />
            </Flex>
        </Stack>
    );
}
