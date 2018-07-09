var express = require('express');
var router = express.Router();
let code = '';

makeResponse = (response) => {
    response.set("Access-Control-Allow-Origin", "*");
    response.set("Access-Control-Allow-Credentials", "true");
    response.set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    response.set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
}

generateCode = () => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 4; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    code = {code: text};
    console.log(code)
}

checkEmail = (email) => {
    return email === 'test@test.com';
};

router.options('/code', function (req, res, next) {
    makeResponse(res);
    res.send('');
});

/* GET code. */
router.post('/code', function (req, res, next) {
    generateCode();
    makeResponse(res);
    res.send(JSON.stringify(code));
    console.log(JSON.stringify(code));
});

router.options('/email', function (req, res, next) {
    makeResponse(res);
    res.send('');
});

router.post('/email', function (req, res, next) {
    let emailBody = (checkEmail(req.body.email));
    makeResponse(res);
    res.json({result: emailBody});
});

router.options('/user', function (req, res, next) {
    makeResponse(res);
    res.send('');
});

router.post('/user', function (req, res, next) {
    makeResponse(res);
    res.send('');
});

module.exports = router;
