// Inicialize o Parse
Parse.initialize("B2qJU3Fe5loB24EybwJ9oukcf3rtMWfJDF4ZK59B", "TpRENXPWBPfvzBP1V6gntZf6OdDEdpFKWUiOnziP");
Parse.serverURL = 'https://parseapi.back4app.com/';

document.getElementById('produtoForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    try {
        // Pegue os valores do formulário
        const nome = document.getElementById('nome').value;
        const preco = Number(document.getElementById('preco').value);
        const fotoFrenteFile = document.getElementById('fotoFrente').files[0];
        const fotoCostaFile = document.getElementById('fotoCosta').files[0];

        if (!nome || !preco || !fotoFrenteFile || !fotoCostaFile) {
            alert('Preencha todos os campos!');
            return;
        }

        // Converta as imagens para base64
        const fotoFrenteBase64 = await toBase64(fotoFrenteFile);
        const fotoCostaBase64 = await toBase64(fotoCostaFile);

        // Salvar o produto com as imagens
        await salvarProduto(nome, preco, fotoFrenteBase64, fotoCostaBase64);

    } catch (error) {
        console.error('Erro ao salvar produto:', error);
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

// Função para salvar o produto no Parse
async function salvarProduto(nome, preco, fotoFrente, fotoCosta) {
    const Produtos = Parse.Object.extend("Produto");
    const produto = new Produtos();

    // Criar Parse.Files para as imagens de frente e costas
    const fileFrente = new Parse.File("fotoFrente.jpg", { base64: fotoFrente });
    const fileCosta = new Parse.File("fotoCosta.jpg", { base64: fotoCosta });

    produto.set("nome", nome);
    produto.set("preco", preco);
    produto.set("fotoFrente", fileFrente); // Salvar o arquivo no Parse
    produto.set("fotoCosta", fileCosta);   // Salvar o arquivo no Parse

    try {
        await produto.save();
        alert('Produto salvo com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar produto:', error);
    }
}
