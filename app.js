; (function () {
    ;[...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn")
            this.classList.add("active-btn")
            document.querySelector(".active").classList.remove("active")
            document.getElementById(button.dataset.id).classList.add("active")
        })
    })
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode")
    })
})()
/* Keep position Refresh */
// function refreshPage() {
//     var page_y = $(document).scrollTop()
//     window.location.href = window.location.href + '?page_y=' + page_y
// }
// window.onload = function () {
//     setTimeout(refreshPage, 35000)
//     if (window.location.href.indexOf('page_y') != -1) {
//         var match = window.location.href.split('?')[1].split("&")[0].split("=")
//         $('html, body').scrollTop(match[1])
//     }
// }
