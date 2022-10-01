var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {

    if (this.readyState == 4 & this.status == 200) {

        var response = JSON.parse(this.responseText);
        var output = "";
        for (var i = 0; i < response.length; i++) {
            if (response[i].completed == true) {
                output += '<input type="checkbox" class=mr-2  checked disabled><label for="check">' + response[i].title + '</label><br><hr>';
            }
            else {
                output += '<input type="checkbox" name="check" class=mr-2 onclick=checkcounter()><label for="check">' + response[i].title + '</label><br><hr>';
            }
        }
        document.getElementById("demo").innerHTML = output;
    }
}

xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send()


function checkcounter() {
    var promise = new Promise(function (resolve, reject) {
        var count = 0;
        check = document.getElementsByName("check");
        for (var i = 0; i < check.length; i++) {
            if (check[i].checked == true) {
                count = count + 1

            }
            console.log(count);
        }
        if (count == 5) {
            resolve("Congrats!!! 5 Tasks have been Successfully Completed")

        }
    });
    promise
        .then(function (s) {
            alert(s);
        });

}



