// task1
function Findletter(st, ch){
    var array = [];
    for(var i=0; i<st.length; i++){
        if(st[i] == ch)
            array.push(i);
    }
    return array;
}
console.log("Indices of letter 'a' in (this is lab2 in day2): " + Findletter("this is lab1 in day2", "a"));
//console.log(Findletter("this is lab1 in day2", "a"))




// task2
function devide(n){
    if(n%3 == 0 && n%5 == 0){ console.log("fizz buzz")}
        else if(n%3 == 0){console.log("fizz")}
        else if(n%5 == 0){console.log("buzz")}
        else{console.log("none")}
}
devide(15);
devide(9);
devide(25);




//task3
function sum(array){
    var res = 0;
    for(var i=0; i<array.length; i++){
        res += array[i];
    }
    return res;
}
function multiply(array){
    var res = 1;
    for(var i=0; i<array.length; i++){
        res *= array[i];
    }
    return res;
}
function div(array){
    var res = array[0];
    for (var i = 1; i < array.length; i++) {
        res /= array[i]; 
    }
    return res;
    }
var array = [4, 6, 8]
console.log("sum of 3 values: " + sum(array));
console.log("multiplication of 3 values: " + multiply(array));
console.log("division of 3 values: " + div(array));



//task4
function sortArray() {
    function Ascending(a, b) {
        return a - b;
    }

    function Descending(a, b) {
        return b - a;
    }

    var array = [5, 7, 1, 9, 4, 21];
    console.log("The values: " + array);

    array.sort(Ascending);
    console.log("Ascending sorted: " + array);

    array.sort(Descending);
    console.log("Descending sorted: " + array);
}
sortArray();

