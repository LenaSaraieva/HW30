//На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо

document.addEventListener("DOMContentLoaded", function() {
const redirectButton1 = document.getElementById("redirectButton1");
const redirectButton2 = document.getElementById("redirectButton2");
});

redirectButton1.addEventListener("click", function() {
    redirectToExternalSite("www.hillel.com")
});

redirectButton2.addEventListener("click", function() {
    redirectToExternalSite("www.hillel.com", true);
});
function redirectToExternalSite(url, secure = false) {
    if (!/^https?:\/\//i.test(url)) {
        url = (secure ? "https://" : "http://") + url;
    }
    window.location.href = url;
}
