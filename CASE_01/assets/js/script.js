let ar = ["1", "2", "3", "4", "5", "6"];

const changeIndex = () =>{
    for (let i = 0; i < list.length; i++) {
        list.eq(i).text(ar[i]);
    }
    ar.unshift(ar.pop());
}

let list = $("body > div > div");

setInterval(changeIndex,1000);
