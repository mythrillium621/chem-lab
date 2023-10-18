const imagensInstrumentos = {
    Becker: 'https://s3-us-west-2.amazonaws.com/svg.mindthegraph.com/realistic/beacker_front_1/900x772/beacker_front_1-04.png',
    'Tubo de Ensaio': 'caminho/para/imagem_tubo_ensaio.jpg',
    Proveta: 'caminho/para/imagem_proveta.jpg',
    Funil: 'caminho/para/imagem_funil.jpg',
  };
  
  const imagensSubstancias = {
    Água: 'https://cdn-icons-png.flaticon.com/512/2209/2209792.png',
    Óleo: 'caminho/para/imagem_oleo.jpg',
    Álcool: 'caminho/para/imagem_alcool.jpg',
    Glicerina: 'caminho/para/imagem_glicerina.jpg',
  };
  
  // Função para atualizar a imagem quando uma opção é escolhida
  function atualizarImagem(elementoImagemId, dropdownId) {
    // Obter o valor selecionado no dropdown
    const selecionado = document.getElementById(dropdownId).value;
  
    // Obter o elemento <img> e definir o atributo src para a imagem correspondente
    const imagemElemento = document.getElementById(elementoImagemId);
  
    // Escolher o mapa de imagens com base no dropdown
    const mapaImagens = dropdownId === 'instrumento' ? imagensInstrumentos : imagensSubstancias;
  
    // Definir a imagem correspondente
    imagemElemento.src = mapaImagens[selecionado];
  }


function adicionarSubstancia() {
 
    const instrumentoSelecionado = document.getElementById('instrumento').value;
    const substanciaSelecionada = document.getElementById('substancia').value;

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerText = `${substanciaSelecionada} adicionado(a) a ${instrumentoSelecionado.toLowerCase()}!`;
  }