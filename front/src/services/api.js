
export async function login(email, senha) {
  const url = 'https://backend-node-fc-rise-up.cyclic.app/login';

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
  const url = `https://backend-node-fc-rise-up.cyclic.app/cliente/${cpf}`;

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
  const url = `https://backend-node-fc-rise-up.cyclic.app/pedido/${numero}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar pedido por número:", error);
    throw error;
  }
}

export async function buscarPedidosPorStatus(status) {
  const url = `https://backend-node-fc-rise-up.cyclic.app/pedidos/all/${status}`;

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
  const url = "https://backend-node-fc-rise-up.cyclic.app/pedidos/all";
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

