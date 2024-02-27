function authenticate(req, res, next) {
    const correctPassword = 'cubos123'; 
    const { password } = req.query; 
    // Verificar se a senha fornecida é correta
    if (password === correctPassword) {
        next(); // Se correta, prosseguir para o próximo middleware ou rota
    } else {
        // Se incorreta, retornar erro 401 Unauthorized
        res.status(401).json({ message: 'Incorrect password' });
    }
}

module.exports = {authenticate} ; // Exportar o middleware para uso no arquivo index.js
