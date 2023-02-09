let test:string = "x";
let title= document.querySelector(".head") as HTMLDivElement;
let arr:string[]=[''];

function end(n1:number, n2:number, n3:number):void {
    
    let mm = document.getElementById("item" + n1) as HTMLDivElement
    mm.style.background = "white"

    let kk = document.getElementById("item" + n2) as HTMLDivElement
    kk.style.background = "white"

    let aa = document.getElementById("item" + n3) as HTMLDivElement
    aa.style.background = "white"


   title.innerHTML = `${arr[n1]} winner`
    setInterval(function() {title.innerHTML += "." }, 1000)
    setTimeout(function() { location.reload() }, 4000)
}

function winner():void {
    for (let i = 1; i < 10; i++) {
        let vv = document.getElementById("item" + i) as HTMLDivElement;
        arr[i] = vv.innerHTML;
    }
    if (arr[1] == arr[2] && arr[2] == arr[3] && arr[1] != "") {
        end(1, 2, 3);
    } else if (arr[4] == arr[5] && arr[5] == arr[6] && arr[5] != "") {
        end(4, 5, 6);
    } else if (arr[7] == arr[8] && arr[8] == arr[9] && arr[8] != "") {
        end(7, 8, 9);
    } else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[4] != "") {
        end(1, 4, 7);
    } else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[2] != "") {
        end(2, 5, 8);
    } else if (arr[3] == arr[6] && arr[6] == arr[9] && arr[6] != "") {
        end(3, 6, 9);
    } else if (arr[1] == arr[5] && arr[5] == arr[9] && arr[9] != "") {
        end(1, 5, 9);
    } else if (arr[3] == arr[5] && arr[5] == arr[7] && arr[7] != "") {
        end(3, 5, 7);
    }
}

function game(id:string):void {
    let c= document.getElementById(id) as HTMLDivElement;
    if (test === "x" && c.innerHTML === "") {
        c.innerHTML = "X"
        title.innerHTML = "X"
        test = "o"

    } else if (test == "o" && c.innerHTML == "") {
        c.innerHTML = "O"
        title.innerHTML = "O"
        test = "x"
    }
    winner();
}