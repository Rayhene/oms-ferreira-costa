import { useState } from 'react';
import {
    Button,
    Flex,
    FormControl,
    Center,
    Input,
    Link,
    Stack,
    Image,
    Text,
    Img,
    Box
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { login } from '../../services/api';
import img from '../../assets/img.png'
import { LockIcon, AtSignIcon } from '@chakra-ui/icons'


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

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();    
        }
    };

    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://carreiras.ferreiracosta.com/wp-content/uploads/2023/05/GPTW_2023_Banner_Site_01.jpg'
                    }
                />
            </Flex>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>

                    <Box>
                        <Center>
                            <Img src={img} width={200} mb={5}></Img>
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
                            onKeyDown={handleKeyPress}
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
                            <Box />
                            <Link color='#9C9C9C'
                                textDecoration="underline"
                                fontSize="12px"
                                mt={-4}
                                mb={-3}>Esqueci minha senha</Link>
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
        </Stack>
    );
}