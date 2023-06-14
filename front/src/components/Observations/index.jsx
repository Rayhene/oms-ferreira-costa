import {
  buscarComentariosPorIDPedido, criarComentario, criarResposta, deletarComentario
} from '../../services/api';
import React, { useState, useRef, useEffect } from 'react';
import { Input, Heading, Avatar, Button, Stack, Box, Flex } from '@chakra-ui/react';

const Observations = () => {
  const [comentarios, setComentarios] = useState([]);
  const [comentarios2, setComentarios2] = useState([]);
  const [novoComentario, setNovoComentario] = useState('');
  const [isReplyClicked, setIsReplyClicked] = useState(false);
  const [replyIndex, setReplyIndex] = useState(null);
  const inputRef = useRef(null);

  const getOrderNumber = () => {
    let orderNumber = window.location.pathname.split('/');
    return orderNumber[2];
  };

  useEffect(() => {
    if (isReplyClicked && replyIndex !== null && inputRef.current) {
      inputRef.current.focus();
    }

    buscarComentariosPorIDPedido(getOrderNumber())
      .then((data) => {
        setComentarios2(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os comentários.', error);
      });
  }, [isReplyClicked, replyIndex]);

  const handleComentar = () => {
    if (novoComentario.trim() !== '') {
      const newComment = {
        nome: 'Fabrício Borges',
        avatar: 'https://avatars.dicebear.com/api/male/username.svg',
        texto: novoComentario,
        respostas: []
      };

      criarComentario(getOrderNumber(), novoComentario)
        .then(() => {
          buscarComentariosPorIDPedido(Number(getOrderNumber()))
            .then((data) => {
              const comentariosAtualizados = [...data];
              setComentarios2(comentariosAtualizados);
              setNovoComentario('');
            })
            .catch((error) => {
              console.error('Erro ao buscar os comentários.', error);
            });
        })
        .catch((error) => {
          console.error('Erro ao criar comentário.', error);
        });
    }
  };

  const handleResponderComentario = (index, resposta) => {
    if (String(resposta).trim() !== '') {
      const updatedComentarios = [...comentarios];
      updatedComentarios[index].respostas.push(resposta);
      setComentarios(updatedComentarios);
      setIsReplyClicked(false);
      setReplyIndex(null);
    }
  };

  const handleExcluirComentario = async (index) => {
    const comentario = comentarios2[index];
    const updatedComentarios = [...comentarios2];
    updatedComentarios.splice(index, 1);
    setComentarios2(updatedComentarios);

    try {
      await deletarComentario(comentario.id_comentario);
      console.log('Comentário excluído com sucesso.');
    } catch (error) {
      console.error('Erro ao excluir comentário.', error);
      setComentarios2([...comentarios2]);
    }

    if (comentarios2.length === 1 && index === 0) {
      setIsReplyClicked(false);
    }
  };

  const handleExcluirResposta = (comentarioIndex, respostaIndex) => {
    const updatedComentarios = [...comentarios2];
    updatedComentarios[comentarioIndex].respostas.splice(respostaIndex, 1);
    setComentarios2(updatedComentarios);
  };

  return (
    <Box maxWidth="70vw" ml="0.5vw" mt="3vh" pb="10vh">
      <Heading size="xl" fontSize="32px" mb="2vw">
        Observações
      </Heading>

      <Stack direction="column">
        {comentarios2.map((comentario, index) => (
          <React.Fragment key={index}>
            {/* OUTPUT DOS COMENTÁRIOS */}
            <Box>
              <Flex align="center">
                <Avatar
                  size="sm"
                  src="https://avatars.dicebear.com/api/male/username.svg"
                  mr={2}
                />
                <Box>
                  <b>Fabrício Borges</b>
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
                ml="55px"
              >
                {comentario.conteudo}
              </Box>
            </Box>
            <Stack direction="row" color="#BABBBB" mt="0.5vh" mb="2vh" alignItems="center">
              <Box width="94%" ml="48px" display="flex" alignItems="center" fontSize={16}>
                <Box
                  ml="15px"
                  direction="row"
                  textDecoration="underline"
                  mr={2}
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
                  <Avatar
                    size="sm"
                    src="https://avatars.dicebear.com/api/male/username.svg"
                    mr={4}
                  />
                  <Input
                    placeholder="Escreva uma resposta..."
                    focusBorderColor="black"
                    colorScheme="black"
                    id={`resposta-${index}`}
                    ref={inputRef}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        handleResponderComentario(index, comentario.id_comentario, event.target.value);
                      }
                    }}
                  />
                  <Button
                    colorScheme="red"
                    variant="outline"
                    size="md"
                    onClick={() =>
                      handleResponderComentario(index, comentario.id_comentario, novoComentario)
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
          </React.Fragment>
        ))}
      </Stack>

      <Stack direction="column">
        {comentarios.map((comentario, index) => (
          <React.Fragment key={index}>
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