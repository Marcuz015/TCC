// Inicialize o Parse
Parse.initialize("B2qJU3Fe5loB24EybwJ9oukcf3rtMWfJDF4ZK59B", "TpRENXPWBPfvzBP1V6gntZf6OdDEdpFKWUiOnziP"); // Substitua pelos seus IDs corretos
Parse.serverURL = 'https://parseapi.back4app.com/';

document.getElementById('produtoForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  try {
    // Pegue os valores do formulário
    const nome = document.getElementById('nome').value;
    const preco = Number(document.getElementById('preco').value);
    const fotoFrenteFile = document.getElementById('fotoFrente').files[0];
    const fotoCostaFile = document.getElementById('fotoCosta').files[0];

    // Verifica se todos os campos estão preenchidos
    if (!nome || !preco || !fotoFrenteFile || !fotoCostaFile) {
      console.error('Todos os campos são obrigatórios!');
      alert('Preencha todos os campos!');
      return;
    }

    // Converta as imagens para base64
    const fotoFrenteBase64 = await toBase64(fotoFrenteFile);
    const fotoCostaBase64 = await toBase64(fotoCostaFile);

    // Crie um novo objeto Parse
    const Produto = Parse.Object.extend("Produto");
    const produto = new Produto();

    // Defina os dados
    produto.set('nome', nome);
    produto.set('preco', preco);
    produto.set('fotoFrente', fotoFrenteBase64);
    produto.set('fotoCosta', fotoCostaBase64);

    // Salve no banco de dados
    const resultado = await produto.save();
    console.log('Produto salvo com sucesso!', resultado); // Log de sucesso
    alert('Produto salvo com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar produto:', error); // Log do erro com mais detalhes
    alert('Erro ao salvar produto: ' + error.message);
  }
});

// Função para converter imagem em base64
function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]); // Converte para base64
    reader.onerror = (error) => reject(error);
  });
}
