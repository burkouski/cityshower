$.validator.addMethod('phone', function (value) {
    var numbers = value.split(/\d/).length - 1;
    return (10 <= numbers && numbers <= 20 && value.match(/^(\+){0,1}(\d|\s|\(|\)){10,20}$/));
}, 'Введите правильный номер ');

$('#callback-form').validate({

    rules: {
        name: {
            required: true
        },
        phone: {
            required: true,
            phone: true,
        }
    },
    messages: {
        name: "Как к вам обращаться?",
        phone: {
            required: "Как с вами связаться?",
            phone: "формат +375291111111"
        }
    },
    submitHandler: function (form) {

    }

});

$('#login-form').validate({

    rules: {
        email: {
            required: true
        },
        pass: {
            required: true,
        }
    },
    messages: {
        email: "Введите ваш e-mail",
        pass: {
            required: "Введите ваш пароль",
        }
    },
    submitHandler: function (form) {

    }

});

$('#registration-form').validate({

    rules: {
        name: {
            required: true
        },
        phone: {
            required: true,
            phone: true,
        },
        email: {
            required: true
        },
        pass: {
            required: true,
        },
        pass2: {
            required: true,
            equalTo: '#password',
        },
        captcha: {
            required: true,
        }

    },
    messages: {
        name: "Введите ваш e-mail",
        pass: {
            required: "Введите ваш пароль",
        },
        pass2: {
            required: "Повторите пароль",
            equalTo: 'Пароли не совпадают',
        },
        phone: {
            required: "Как с вами связаться?",
            phone: "формат +375291111111"
        },
        email: "Введите ваш e-mail",
        captcha: "Введите текст с картинки"
    },
    submitHandler: function (form) {

    }

});

$('#faq-form').validate({

    rules: {

        email: {
            required: true
        },
        question: {
            required: true
        }

    },
    messages: {

        email: "Введите ваш e-mail!",
        question: "Задайте вопрос!"
    },
    submitHandler: function (form) {

    }

});
