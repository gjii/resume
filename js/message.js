!function () {
    var view = document.querySelector('section.message')
    var controller = function (view) {
        AV.init({
            appId: "IU9mG29OF1XePv26NT9yypsF-gzGzoHsz",
            appKey: "YMf9i9g7pKcrzKgpVom6ekmP",
            serverURLs: "https://leancloud.cn"
        });

        var query = new AV.Query('Message');
        query.find()
            .then(
                function (messages) {
                    let array = messages.map((item) => item.attributes)
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                        let messageList = document.querySelector('#messageList')
                        messageList.append(li)
                    })
                })

        let myForm = document.querySelector('#postMessageForm')
        myForm.addEventListener('submit', function (e) {
            e.preventDefault()
            let name = myForm.querySelector('input[name = name]').value
            let content = myForm.querySelector('input[name = content]').value
            var Message = AV.Object.extend('Message');
            var message = new Message();
            message.set({
                'name': name,
                'content': content
            });
            message.save().then(function (Object) {
                let li = document.createElement('li')
                li.innerText = `${Object.attributes.name}: ${Object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.append(li)
                myForm.querySelector('input[name = content]').value = ''
            })
        })
    }
    controller(view)
}.call()





