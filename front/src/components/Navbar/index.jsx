import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  MenuProvider,
  MenuCommand,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import img from '../../assets/img.png';
import { Link as LinkDom } from 'react-router-dom';

const Links = ['Dashboard', 'Pedidos', 'Estatísticas'];

const rotaAtual = () => {
  let numeroPedido = window.location.pathname.split('/');
  console.log(numeroPedido[1]);
  return numeroPedido[1];
};

const NavLink = ({ children}) => {

  let router = rotaAtual();
  let  mapRouter = router === 'pedidos' ? 'Pedidos' : router === '' ? 'Dashboard' : 'Estatísticas';

  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('red.200', 'red.700'),
      }}
      as={LinkDom} to={(children === 'Pedidos' ? "/pedidos" : children === 'Dashboard' ? "/" : "/estatisticas")}
      style={{ color: mapRouter === children ? 'red' : 'black' }}
      >
      {children}
  
    </Link>
  );

}

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justifyContent="center">
      <Box w='1280px' bg={useColorModeValue('white.100', 'white.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><img src={img} alt="logo da Ferreira Costa" width={75} height={75} /></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Box mr={5} display="flex">
              Olá, <Box style={{ fontWeight: 'bold' }} ml={2}>Igor Santos!</Box>
            </Box>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://avatars.githubusercontent.com/u/103756299?v=4'
                  }
                />
              </MenuButton>
              <MenuList>
                <Stack align={'center'} direction={'column'}>
                  <MenuProvider>Igor Santos</MenuProvider>
                  <MenuCommand fontSize={14}>Financeiro</MenuCommand>
                </Stack>
                
                <MenuDivider />
                <MenuItem>Gerenciar Perfil</MenuItem>
                <MenuItem>Sair</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <hr></hr>
    </Flex>
  );
}