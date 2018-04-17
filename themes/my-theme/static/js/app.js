var myFunction = function () {
    var x = document.getElementsByClassName("navbar__li")
    for (var i = 0; i < x.length; i++) {
        var oneClass = x[i]
        if (x[i].className === "navbar__li") {
            x[i].className += " show-menu"
        }
        else { x[i].className = "navbar__li" }
    }
}

var productOrder = function () {
    var element = document.getElementsByClassName("number-order-in-table");
    for (var i = 0; i < element.length; i++) {
        var myVar = i + 1;
        console.log(myVar)
        element[i].insertAdjacentHTML('afterbegin', myVar)
        }
}
productOrder()



