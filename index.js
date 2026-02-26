const express = require('express');
const path = require('path');
const app = express();

// Porta padrão para o Render ou porta 3000 local
const PORT = process.env.PORT || 3000;

// Serve os arquivos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal: entrega o seu PC Virtual
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 MobiCloud PC rodando na porta ${PORT}`);
});
