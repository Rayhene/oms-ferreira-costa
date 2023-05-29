import React, { useState } from 'react';
import { Input, Heading, Avatar, Button, Stack, Box, Flex } from '@chakra-ui/react';

const Observations = () => {
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleComentar();
    }
  };

  const handleComentar = () => {
    if (novoComentario.trim() !== '') {
      const novoComentarioObj = {
        avatar: 'https://avatars.dicebear.com/api/male/username.svg',
        texto: novoComentario,
      };

      setComentarios([...comentarios, novoComentarioObj]);
      setNovoComentario(''); // Limpa o input após adicionar o comentário
    }
  };

  return (
    <Box width="60%" ml="70px">
      <Heading size="xl" fontSize="32px">
        Observações
      </Heading>

      <Stack direction="row" spacing={4} mt={4}>
        <Avatar size={'sm'} src={'https://avatars.dicebear.com/api/male/username.svg'} />
        <Input
          placeholder="Escreva um comentário..."
          focusBorderColor="black"
          colorScheme="black"
          value={novoComentario}
          onKeyDown={handleKeyDown}
          onChange={(event) => setNovoComentario(event.target.value)}
        />
        <Button
          colorScheme="red"
          variant="outline"
          size="md"
          onClick={handleComentar}
          isDisabled={novoComentario.trim() === ''}
        >
          Comente
        </Button>
      </Stack>

      <Stack direction="column" spacing={0} mt={4}>
        {comentarios.map((comentario, index) => (
          <React.Fragment key={index}>
            <Flex align="center" wrap="wrap">
              <Avatar size="sm" src={comentario.avatar} mr={4} />
              <Box>Ana Paula Firmo</Box>
              <Box color="#c3c3c3" ml={1}>
                | Financeiro
              </Box>
            </Flex>

            <Stack direction="column" mt={3} ml={4} mt={2}>
              <Box
                border="1px"
                boxShadow="base"
                p="6"
                rounded="md"
                bg="white"
                borderColor="gray.200"
                borderRadius="10"
                padding={2}
                width="93%"
                ml="7%"
              >
                {comentario.texto}
              </Box>
            </Stack>
          </React.Fragment>
        ))}
      </Stack>
    </Box>
  );
};

export default Observations;
