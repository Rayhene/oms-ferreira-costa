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

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar todos os pedidos:", error);
    throw error;
  }
}
