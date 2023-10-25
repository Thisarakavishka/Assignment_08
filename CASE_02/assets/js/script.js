let ar = ["black", "purple", "red", "green", "yellow", "pink"];

const changeIndex = () => {
    for (let i = 0; i < list.length; i++) {
        list.eq(i).css("background", ar[i]);
    }
    ar.unshift(ar.pop());
}

let list = $("body > div > div");

setInterval(changeIndex, 1000);
