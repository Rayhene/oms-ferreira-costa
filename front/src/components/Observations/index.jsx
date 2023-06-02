import React, { useState, useEffect, useRef } from 'react';
import { Input, Heading, Avatar, Button, Stack, Box, Flex } from '@chakra-ui/react';

const Observations = () => {
  const [comentarios, setComentarios] = useState(() => {
    const comentariosArmazenados = localStorage.getItem('comentarios');
    return comentariosArmazenados ? JSON.parse(comentariosArmazenados) : [];
  });
  const [novoComentario, setNovoComentario] = useState('');
  const [respostaAberta, setRespostaAberta] = useState([]);
  const [isReplyClicked, setIsReplyClicked] = useState(false);
  const [replyIndex, setReplyIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
    scrollToBottom();
  }, [comentarios]);

  const handleModify = (index) => {
    setIsReplyClicked(!isReplyClicked);
    setReplyIndex(index);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleResponderComentario(index, event.target.value);
    }
  };

  const handleComentar = () => {
    if (novoComentario.trim() !== '') {
      const novoComentarioObj = {
        avatar: 'https://avatars.dicebear.com/api/male/username.svg',
        nome: 'Hamilton Gomes',
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

  const focusInputComent = useRef(null);

  const handleResponderComentario = (index, resposta) => {
    setComentarios((prevComentarios) => {
      const novosComentarios = [...prevComentarios];
      const comentario = novosComentarios[index];
      comentario.respostas.push(resposta);
      return novosComentarios;
    });
    toggleResposta(index);
    setIsReplyClicked(false);
    setReplyIndex(null);
  };

  const handleExcluirResposta = (comentarioIndex, respostaIndex) => {
    setComentarios((prevComentarios) => {
      const novosComentarios = [...prevComentarios];
      const comentario = novosComentarios[comentarioIndex];
      comentario.respostas.splice(respostaIndex, 1);
      return novosComentarios;
    });
  };

  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <Box maxWidth="60vw" ml="12" mt="3vh" pb="10vh">
      <Heading size="xl" fontSize="32px" mb="1vw">
        Observações
      </Heading>

      <Stack direction="column">
        {comentarios.map((comentario, index) => (
          <React.Fragment key={index}>
            <Flex align="center" mt="2vh">
              <Avatar size="sm" src={comentario.avatar} mr={4} />
              <Box>
                <b>{comentario.nome}</b>
              </Box>
              <Box color="#c3c3c3" ml={1}>
                | Financeiro
              </Box>
            </Flex>

            <Stack>
              <Box
                mt="0.5vh"
                border="1px"
                boxShadow="base"
                p="6"
                rounded="md"
                bg="white"
                borderColor="gray.200"
                borderRadius="10"
                padding={2}
                ml="60px"
              >
                {comentario.texto}
              </Box>

              <Stack direction="row" color="#BABBBB" mt="0.5vh" mb="2vh" alignItems="center">
                <Box width="94%" ml="48px" display="flex" alignItems="center" fontSize={16}>
                  <Box
                    ml="15px"
                    direction="row"
                    textDecoration="underline"
                    mr={2}
                    onClick={() => handleModify(index)}
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

              {/* INPUT DA RESPOSTA */}
              {isReplyClicked && replyIndex === index && (
                <Stack direction="row" spacing={4} mt='1vh' mb='1vh'>
                  <Flex justifyContent={'space-between'} width="100%" gap="1vw">
                    <Avatar size={'sm'} src={'https://avatars.dicebear.com/api/male/username.svg'} />

                    <Input
                      placeholder="Escreva uma resposta..."
                      focusBorderColor="black"
                      colorScheme="black"
                      ref={focusInputComent}
                      id={`resposta-${index}`}
                      onKeyDown={(event) => handleKeyDown(event, index)}
                    />

                    <Button
                      colorScheme="red"
                      variant="outline"
                      size="md"
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
                      size="md"
                      onClick={() => handleModify(index)}
                      ml={2}
                    >
                      Cancelar
                    </Button>
                  </Flex>
                </Stack>
              )}

              {/* OUTPUT DA RESPOSTA */}
              {comentario.respostas.map((resposta, respostaIndex) => (
                <Box key={respostaIndex} ml="150px" pl={10}>
                  <Flex align="center">
                    <Avatar size="sm" src={comentario.avatar} mr={2} />
                    <Box>
                      <b>{comentario.nome}</b>
                    </Box>
                    <Box color="#c3c3c3" ml={1}>
                      | Financeiro
                    </Box>
                  </Flex>
                  <Box
                    mt="0.5vh"
                    border="1px"
                    boxShadow="base"
                    p="6"
                    rounded="md"
                    bg="white"
                    borderColor="gray.200"
                    borderRadius="10"
                    padding={2}
                    ml="50px"
                  >
                    {resposta}
                  </Box>
                  <Stack direction="row" color="#BABBBB" mt={2}>
                    <Box
                      fontSize={16}
                      ml="52px"
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
            </Stack>
          </React.Fragment>
        ))}
      </Stack>

      {/* INPUT DE COMENTÁRIO e RESPOSTA */}
      {!isReplyClicked && (
        <Stack direction="row" spacing={4} mt='1vh' mb='1vh'>
          <Avatar size={'sm'} src={'https://avatars.dicebear.com/api/male/username.svg'} />

          <Flex justifyContent={'space-between'} width="100%" gap="1vw">
            <Input
              ref={focusInputComent}
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
              onClick={handleComentar}
              isDisabled={novoComentario.trim() === ''}
            >
              Comente
            </Button>
          </Flex>
        </Stack>
      )}
    </Box>
  );
};

export default Observations;
