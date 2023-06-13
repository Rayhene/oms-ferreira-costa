export async function login(email, senha) {
  const url = 'https://node-project-fc-production.up.railway.app/login';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        senha: senha,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
}

export async function buscarPedidoPorCPF(cpf) {
  const url = `https://node-project-fc-production.up.railway.app/cliente/${cpf}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar pedido por CPF:", error);
    throw error;
  }
}

export async function buscarPedidoPorNumero(numero) {
  const url = `https://node-project-fc-production.up.railway.app/pedido/${numero}`;
  const urlBackup = `https://backend1-node-fc-rise-up.cyclic.app/pedido/${numero}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Erro ao buscar pedido por número:", error);
    console.warn("Tentando URL de backup...");
  }
  try {
    const responseBackup = await fetch(urlBackup);
    if (responseBackup.ok) {
      const dataBackup = await responseBackup.json();
      return dataBackup;
    } else {
      throw new Error("Erro ao buscar todos os pedidos na URL de backup.");
    }
  } catch (errorBackup) {
    console.error("Erro ao buscar todos os pedidos na URL de backup:", errorBackup);
    throw errorBackup;
  }
}

export async function buscarPedidosPorStatus(status) {
  const url = `https://node-project-fc-production.up.railway.app/pedidos/all/${status}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar pedidos por status:", error);
    throw error;
  }
}

export async function buscarTodosPedidos() {
  const url = "https://node-project-fc-production.up.railway.app/pedidos/all";
  const urlBackup = "https://backend1-node-fc-rise-up.cyclic.app/pedidos/all";

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.warn("Erro ao buscar todos os pedidos. Tentando URL de backup...");
    }
  } catch (error) {
    console.error("Erro ao buscar todos os pedidos:", error);
    console.warn("Tentando URL de backup...");
  }

  try {
    const responseBackup = await fetch(urlBackup);
    if (responseBackup.ok) {
      const dataBackup = await responseBackup.json();
      return dataBackup;
    } else {
      throw new Error("Erro ao buscar todos os pedidos na URL de backup.");
    }
  } catch (errorBackup) {
    console.error("Erro ao buscar todos os pedidos na URL de backup:", errorBackup);
    throw errorBackup;
  }
}

export async function buscarComentariosPorIDPedido(numero) {
  const url = `https://node-project-fc-production.up.railway.app/comentarios/${numero}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      return data;
    } else {
      console.warn("Erro ao buscar todos os comentários.");
    }
  } catch (error) {
    console.error("Erro ao buscar comentário por ID do pedido:", error);
    throw error;
  }
}

export async function criarComentario(numero, conteudoComentario) {
  const url = 'https://node-project-fc-production.up.railway.app/comentarios/';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{
        idPedido: numero,
        conteudo: conteudoComentario
      }]),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao criar comentário.', error);
    throw error;
  }
}

export async function criarResposta(resposta, numero, idComentarioASerRespondido) {
  const url = `https://node-project-fc-production.up.railway.app/comentarios/${idComentarioASerRespondido}`;

  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      resposta: resposta,
      id_pedido: numero
    })
  };

  try {
    const response = await fetch(url, params);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.warn("Erro ao criar resposta.");
    }
  } catch (error) {
    console.error("Erro ao criar resposta.", error);
    throw error;
  }
}

export async function deletarComentario(idComentario) {
  const url = `https://node-project-fc-production.up.railway.app/comentarios/${idComentario}`;

  const params = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  };

  try {
    const response = await fetch(url, params);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.warn("Erro ao deletar comentário.");
    }
  } catch (error) {
    console.error("Erro ao deletar comentário.", error);
    throw error;
  }
}
