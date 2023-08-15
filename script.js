const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

const btnEncriptar = () => {
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
};

const encriptar = (stringEncriptada) => {
  let matrizCodigo = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
};

const btnDesencriptar = () => {
  const textoDesencriptado = desencriptar(textArea.value);
  mensagem.value = textoDesencriptado;
  textArea.value = "";
};

const desencriptar = (stringDesencriptada) => {
  let matrizCodigo = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
};

function copiarTexto() {
  var areaSaida = document.querySelector(".mensagem");
  areaSaida.select();
  document.execCommand("copy");
}
document.querySelector(".btn-copiar").addEventListener("click", copiarTexto);
