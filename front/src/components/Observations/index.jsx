import React, { useState, useEffect } from 'react';
import { Input, Heading, Avatar, Button, Stack, Box, Flex } from '@chakra-ui/react';

const Observations = () => {
  const [comentarios, setComentarios] = useState(() => {
    const comentariosArmazenados = localStorage.getItem('comentarios');
    return comentariosArmazenados ? JSON.parse(comentariosArmazenados) : [];
  });
  const [novoComentario, setNovoComentario] = useState('');
  const [respostaAberta, setRespostaAberta] = useState([]);

  useEffect(() => {
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
  }, [comentarios]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleComentar();
    }
  };

  const handleComentar = () => {
    if (novoComentario.trim() !== '') {
      const novoComentarioObj = {
        avatar: 'https://avatars.dicebear.com/api/male/username.svg',
        nome: 'Hamilton Gomes da Silva Filho',
        texto: novoComentario,
        respostas: [],
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

  const toggleResposta = (index) => {
    if (respostaAberta.includes(index)) {
      setRespostaAberta((prevRespostaAberta) => prevRespostaAberta.filter((i) => i !== index));
    } else {
      setRespostaAberta((prevRespostaAberta) => [...prevRespostaAberta, index]);
    }
  };

  const handleResponderComentario = (index, resposta) => {
    setComentarios((prevComentarios) => {
      const novosComentarios = [...prevComentarios];
      const comentario = novosComentarios[index];
      comentario.respostas.push(resposta);
      return novosComentarios;
    });
    toggleResposta(index);
  };

  const handleExcluirResposta = (comentarioIndex, respostaIndex) => {
    setComentarios((prevComentarios) => {
      const novosComentarios = [...prevComentarios];
      const comentario = novosComentarios[comentarioIndex];
      comentario.respostas.splice(respostaIndex, 1);
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
              <Box>
                <b>{comentario.nome}</b>
              </Box>
              <Box color="#c3c3c3" ml={1}>
                | Financeiro
              </Box>
            </Flex>

            <Stack direction="column" ml={4} mt={2}>
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

              {respostaAberta.includes(index) && (
                <Box ml={4} mt={2}>
                  <Flex align="center">
                    <Avatar size="sm" src={'https://avatars.dicebear.com/api/male/username.svg'} mr={2} />
                    <Input
                      placeholder="Escreva uma resposta..."
                      focusBorderColor="black"
                      colorScheme="black"
                      id={`resposta-${index}`}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          event.preventDefault();
                          handleResponderComentario(index, document.getElementById(`resposta-${index}`).value);
                        }
                      }}
                    />
                    <Button
                      colorScheme="red"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        handleResponderComentario(index, document.getElementById(`resposta-${index}`).value)
                      }
                      ml={2}
                    >
                      Enviar
                    </Button>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      size="sm"
                      onClick={() => toggleResposta(index)}
                      ml={2}
                    >
                      Cancelar
                    </Button>
                  </Flex>
                </Box>
              )}

              {comentario.respostas.map((resposta, respostaIndex) => (
                <Box key={respostaIndex} ml={4} mt={2} pl={10} borderLeft="1px solid gray">
                  <Flex align="center" wrap="wrap">
                    <Avatar size="sm" src={comentario.avatar} mr={2} />
                    <Box>
                      <b>{comentario.nome}</b>
                    </Box>
                    <Box color="#c3c3c3" ml={1}>
                      | Financeiro
                    </Box>
                  </Flex>
                  <Box mt={2} bg="gray.100" p={2} rounded="md"
                    ml="6%">
                    {resposta}
                  </Box>
                  <Stack direction="row" color="#BABBBB" mt={2}>
                    <Box
                      ml="6%"
                      direction="row"
                      textDecoration="underline"
                      onClick={() => handleExcluirResposta(index, respostaIndex)}
                      style={{ cursor: 'pointer' }}
                    >
                      Excluir
                    </Box>
                  </Stack>
                </Box>
              ))}

              <Stack direction="row" color="#BABBBB" mt={4} mb={7} alignItems="center">
                <Box width="94%" ml="6%" mb={7} display="flex" alignItems="center">
                  <img src="../../asset/addEmoji.png" alt="" />
                  <Box
                    direction="row"
                    textDecoration="underline"
                    mr={2}
                    onClick={() => toggleResposta(index)}
                    style={{ cursor: 'pointer' }}
                  >
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
