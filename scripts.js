var test = "x";
var title = document.querySelector(".head");
var arr = [''];
function end(n1, n2, n3) {
    var mm = document.getElementById("item" + n1);
    mm.style.background = "white";
    var kk = document.getElementById("item" + n2);
    kk.style.background = "white";
    var aa = document.getElementById("item" + n3);
    aa.style.background = "white";
    title.innerHTML = "".concat(arr[n1], " winner");
    setInterval(function () { title.innerHTML += "."; }, 1000);
    setTimeout(function () { location.reload(); }, 4000);
}
function winner() {
    for (var i = 1; i < 10; i++) {
        var vv = document.getElementById("item" + i);
        arr[i] = vv.innerHTML;
    }
    if (arr[1] == arr[2] && arr[2] == arr[3] && arr[1] != "") {
        end(1, 2, 3);
    }
    else if (arr[4] == arr[5] && arr[5] == arr[6] && arr[5] != "") {
        end(4, 5, 6);
    }
    else if (arr[7] == arr[8] && arr[8] == arr[9] && arr[8] != "") {
        end(7, 8, 9);
    }
    else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[4] != "") {
        end(1, 4, 7);
    }
    else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[2] != "") {
        end(2, 5, 8);
    }
    else if (arr[3] == arr[6] && arr[6] == arr[9] && arr[6] != "") {
        end(3, 6, 9);
    }
    else if (arr[1] == arr[5] && arr[5] == arr[9] && arr[9] != "") {
        end(1, 5, 9);
    }
    else if (arr[3] == arr[5] && arr[5] == arr[7] && arr[7] != "") {
        end(3, 5, 7);
    }
}
function game(id) {
    var c = document.getElementById(id);
    if (test === "x" && c.innerHTML === "") {
        c.innerHTML = "X";
        title.innerHTML = "X";
        test = "o";
    }
    else if (test == "o" && c.innerHTML == "") {
        c.innerHTML = "O";
        title.innerHTML = "O";
        test = "x";
    }
    winner();
}
