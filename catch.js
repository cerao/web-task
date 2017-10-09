var global_array;
var array_same_payment
var array_amount
var array_categoryID
var array_dateID
var array_textID
var count = 0;
document.body.addEventListener("offline", function () {
    var myStorage = window.localStorage;
        if(myStorage){

            myStorage.setItem("web task", global_array);
        }

}, false);