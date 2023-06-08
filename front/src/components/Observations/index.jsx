import React, { useState, useRef, useEffect } from 'react';
import { Input, Heading, Avatar, Button, Stack, Box, Flex } from '@chakra-ui/react';

const Observations = () => {
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState('');
  const [isReplyClicked, setIsReplyClicked] = useState(false);
  const [replyIndex, setReplyIndex] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isReplyClicked && replyIndex !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isReplyClicked, replyIndex]);

  const handleComentar = () => {
    if (novoComentario.trim() !== '') {
      const newComment = {
        nome: 'Hamilton Gomes',
        avatar: 'https://avatars.dicebear.com/api/male/username.svg',
        texto: novoComentario,
        respostas: [],
      };
      setComentarios([...comentarios, newComment]);
      setNovoComentario('');
    }
  };

  const handleResponderComentario = (index, resposta) => {
    if (resposta.trim() !== '') {
      const updatedComentarios = [...comentarios];
      updatedComentarios[index].respostas.push(resposta);
      setComentarios(updatedComentarios);
      setIsReplyClicked(false);
      setReplyIndex(null);
    }
  };

  const handleExcluirComentario = (index) => {
    const updatedComentarios = [...comentarios];
    updatedComentarios.splice(index, 1);
    setComentarios(updatedComentarios);

    if (comentarios.length === 1 && index === 0) {
      setIsReplyClicked(false);
    }
  };

  const handleExcluirResposta = (comentarioIndex, respostaIndex) => {
    const updatedComentarios = [...comentarios];
    updatedComentarios[comentarioIndex].respostas.splice(respostaIndex, 1);
    setComentarios(updatedComentarios);
  };

  return (
    <Box maxWidth="62vw" ml="12" mt="3vh" pb="10vh">
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
                    onClick={() => {
                      setIsReplyClicked(true);
                      setReplyIndex(index);
                    }}
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
                <Stack direction="row" spacing={4} mb="1vh">

                  <Flex justifyContent="space-between" width="100%">
                    <Avatar size="sm" src="https://avatars.dicebear.com/api/male/username.svg" mr={4} />

                    <Input
                      placeholder="Escreva uma resposta..."
                      focusBorderColor="black"
                      colorScheme="black"
                      id={`resposta-${index}`}
                      ref={inputRef}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          handleResponderComentario(index, event.target.value);
                        }
                      }}
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
                      onClick={() => {
                        setIsReplyClicked(false);
                        setReplyIndex(null);
                      }}
                      ml={2}
                    >
                      Cancelar
                    </Button>
                  </Flex>
                </Stack>
              )}

              {/* OUTPUT DA RESPOSTA */}
              {comentario.respostas.map((resposta, respostaIndex) => (
                <Box key={respostaIndex} ml="120px" pl={10}>
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
                      ml="55px"
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
        <Stack direction="row" mb="1vh">

          <Flex justifyContent="space-between" width="100%" mt="1vh">
            <Avatar size="sm" src="https://avatars.dicebear.com/api/male/username.svg" mr={4} />
            <Input
              placeholder="Escreva um comentário..."
              focusBorderColor="black"
              colorScheme="black"
              value={novoComentario}
              onChange={(event) => setNovoComentario(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleComentar();
                }
              }}
            />
            <Button
              colorScheme="red"
              variant="outline"
              onClick={handleComentar}
              isDisabled={novoComentario.trim() === ''}
              ml={2}
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