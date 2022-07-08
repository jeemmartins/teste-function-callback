document.addEventListener("DOMContentLoaded", () => {
  const nomeEl = document.querySelector("#nome");
  const velocidadeEl = document.querySelector("#velocidade");
  const acelerarEl = document.querySelector("#acelerar");
  const desacelerarEl = document.querySelector("#desacelerar");
  const mostrarResultadoEl = document.querySelector("#mostrarResultado");
  const resultadoEl = document.querySelector("#resultado");

  function acelerarNave(velocidade) {
    let novaVelocidade = velocidade + 5;
    return novaVelocidade;
  }

  function desacelerarNave(velocidade) {
    let novaVelocidade = velocidade - 5;
    if (novaVelocidade < 0) {
      novaVelocidade = 0;
    }
    return novaVelocidade;
  }

  acelerarEl.addEventListener("click", () => {
    velocidadeEl.value = acelerarNave(+velocidadeEl.value);
  });

  desacelerarEl.addEventListener("click", () => {
    velocidadeEl.value = desacelerarNave(+velocidadeEl.value);
  });

  mostrarResultadoEl.addEventListener("click", () => {
    resultadoEl.innerHTML = `
      <p>Nome: ${nomeEl.value}</p>
      <p>Velocidade: ${velocidadeEl.value}</p>
    `;
  });
});
