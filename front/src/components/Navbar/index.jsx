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
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import img from '../../assets/img.png';
import img1 from '../../assets/config.svg';
import img2 from '../../assets/sair-vetor.svg';
import { Link as LinkDom } from 'react-router-dom';

const Links = ['Dashboard', 'Pedidos', 'Estatísticas'];

const rotaAtual = () => {
  let numeroPedido = window.location.pathname.split('/');
  console.log(numeroPedido[1]);
  return numeroPedido[1];
};

const NavLink = ({ children }) => {
  let router = rotaAtual();
  let mapRouter =
    router === 'pedidos'
      ? 'Pedidos'
      : router === 'Home'
      ? 'Dashboard'
      : router === 'estatisticas'
      ? 'Estatísticas'
      : 'Pedidos';

  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('#E5E5E5'),
      }}
      as={LinkDom} to={(children === 'Pedidos' ? "/pedidos" : children === 'Dashboard' ? "/Home" : "/estatisticas")}
      style={{ backgroundColor: mapRouter === children ? '#00b233' : 'none', color: mapRouter === children ? 'white' : 'black' }}
    >
      {children}

    </Link>
  );

}

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justifyContent="center" borderBottom='1px' borderColor='#D9D9D9'>
      <Box w='1280px' bg={useColorModeValue('white.100', 'white.900')} px={4}  >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><img src={img} alt="logo da Ferreira Costa" width={100} height={100} /></Box>
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
              Olá, <Box style={{ fontWeight: 'bold' }} ml={2}>Fabrício Borges!</Box>
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
                    'https://avatars.dicebear.com/api/male/username.svg'
                  }
                />
              </MenuButton>
              <MenuList>
                
                <Stack sx={{ paddingLeft: 5, paddingTop: 4, PaddingBotton: 4}} align={'start'} direction={'column'}>
                  <MenuProvider>Fabrício Borges</MenuProvider>
                  <MenuCommand fontSize={14}>Financeiro</MenuCommand>
                </Stack>
                <MenuDivider/>
                <MenuItem sx={{ paddingLeft: 5 }}>
                <img src={img1} alt="configuração" style={{ width: 22, height: 22, marginRight: 10 }} />
                  Gerenciar Perfil</MenuItem>
                <MenuItem sx={{ paddingLeft: 6 }} onClick={() => window.location.href = '/'}>
                <img src={img2} alt="sair" style={{ width: 20, height: 18, marginRight: 8 }} /> Sair</MenuItem>
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