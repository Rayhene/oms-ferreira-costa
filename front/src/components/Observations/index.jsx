import React, { useState, useEffect } from 'react';
import { Input, Heading, Avatar, Button, Stack, Box, Flex } from '@chakra-ui/react';

const Observations = () => {
  const [comentarios, setComentarios] = useState(() => {
    const comentariosArmazenados = localStorage.getItem('comentarios');
    return comentariosArmazenados ? JSON.parse(comentariosArmazenados) : [];
  });
  const [novoComentario, setNovoComentario] = useState('');

  useEffect(() => {
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
  }, [comentarios]);

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

      setComentarios((prevComentarios) => [...prevComentarios, novoComentarioObj]);
      setNovoComentario('');
    }
  };

  const handleExcluirComentario = (index) => {
    setComentarios((prevComentarios) => {
      const novosComentarios = [...prevComentarios];
      novosComentarios.splice(index, 1);
      return novosComentarios;
    });
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
              <Box><b>Ana Paula Firmo</b></Box>
              <Box color="#c3c3c3" ml={1}>
                | Financeiro
              </Box>
            </Flex>

            <Stack direction="column" ml={4}>
              <Box
                mt={1}
                border="1px"
                boxShadow="base"
                p="6"
                rounded="md"
                bg="white"
                borderColor="gray.200"
                borderRadius="10"
                padding={2}
                width="94%"
                ml="6%"
              >
                {comentario.texto}
              </Box>

              <Stack direction="row" color="#BABBBB" mt={4} mb={7} alignItems="center">
                <Box width="94%" ml="6%" mb={7} display="flex" alignItems="center">
                  <img src="../../asset/addEmoji.png" alt="" />
                  <span ml={2}>●</span>
                  <Box direction="row" textDecoration="underline" ml={2} mr={2}>
                    Responder
                  </Box>
                  <span ml={2}>●</span>
                  <Box
                    direction="row"
                    textDecoration="underline"
                    ml={2}
                    onClick={() => handleExcluirComentario(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    Excluir
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </React.Fragment>
        ))}
      </Stack>
    </Box>
  );
};

export default Observations;
