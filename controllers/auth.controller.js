
//функции логина и регистрации контроллера


function login(req, res) {
    console.log('login');
    res.status(200).send({
        message: 'login'
    });
}

function register(req, res) {
    console.log('register')
    res.status(200).send({
        message: 'register'
    });
}

module.exports = {
    login,
    register
}