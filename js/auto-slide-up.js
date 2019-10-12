//添加屏幕位移
!function () {
    let specialTages = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTages.length; i++) {
        specialTages[i].classList.add('offset')
    }
    //延时发动函数findClosestAndRemoveOffset
    setTimeout(function () {
        findClosestAndRemoveOffset()
    }, 1500)
    //延时去除active样式
    setTimeout(function () {
        siteWelcome.classList.remove('active')
    }, 1000)

    window.addEventListener('scroll', function (x) { findClosestAndRemoveOffset() })


    /*helper*/
    function findClosestAndRemoveOffset() {
        let specialTages = document.querySelectorAll('[data-x]')
        let minIndex = 0
        for (let i = 1; i < specialTages.length; i++) {
            if (Math.abs(specialTages[i].offsetTop - window.scrollY) < Math.abs(specialTages[minIndex].offsetTop - window.scrollY)) {
                minIndex = i
            }
        }
        for (let i = 0; i < specialTages.length; i++) {
            specialTages[i].classList.remove('active')
        }
        specialTages[minIndex].classList.add('active')
        //minIdex是里屏幕离窗口顶端最近的元素
        specialTages[minIndex].classList.remove('offset')
        let id = specialTages[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let bro = li.parentNode.children
        for (let i = 0; i < bro.length; i++) {
            bro[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
    //找弟弟
    let liTags = document.querySelectorAll('nav.menu > ul > li')
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (x) {
            let li = x.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function (x) {
            let li = x.currentTarget.classList.remove('active')
        }
    }
}.call()
