function atualizarPreco() {
  const precoPorPessoa = 20.000;
  const quantidadeLugares = document.getElementById('numLugares').value; 
  const precoTotal = precoPorPessoa * quantidadeLugares;
  
  const precoTotalFormatado = precoTotal.toLocaleString('pt-BR', {style:'decimal',minimumFractionDigits: 5, maximumFractionDigits: 5 });

document.getElementById('precoTotal').innerText = precoTotalFormatado;
}

function finalizarReserva() {
  const quantidadeLugares = document.getElementById('numLugares').value;
  const precoTotal = document.getElementById('precoTotal').innerText;

  if (quantidadeLugares < 1 || quantidadeLugares > 4) {
      alert('A quantidade de lugares selecionada está fora do limite permitido.');
      return;
  }

  alert(`Reserva realizada com sucesso! Você reservou ${quantidadeLugares} lugares, totalizando R$ ${precoTotal}.`);
}