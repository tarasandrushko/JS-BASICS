// b(1,15) => 16, b(55,3) => 58, b(-5, -5) => -10
function sum(a, b) {
    return a + b;
}
// c(2,2) => 4, c(3,3) => 27, b(4,5) => 1024
function pow(a, b) {
    var c = Math.pow(a, b);
    return c;
}
// d(1) => {a:1}, b(123) => {a:123}
function d(dd) {
    var obj = { a: dd };
    return obj;
}
// e(55)() => 55, e(123)() => 123
function ddd(a) {
    return function() {
        return a;
    }
}
// f(1,3) => [1,1,1], b('x',5) => ['x','x','x','x','x'], b(-1,2) => [-1,-1]
function s(a, b) {
    var array = [];
    for (var i = 0; i < b; i++) {
        array.push(a);
    }
    return array;
}
// g() => 99, b(1) => 1, b(2) => 2, b(3) => 3, b(99) => 99
function l(a) {
    if (a) {
        return a;
    } else {
        return 99;
    }
}
 //h(function(){return 5}) => 5, h(function(){return 123}) => 123
function bb(h) {
    return bb();
}

// j([1,2,3]) => 6, j([12,34,56]) => 102
function jj(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
// k({a:1,b:2,c:3}) => 6, k({n:55,s:82}) => 137
function kk(obj) {
    var total = 0;
    for (var key in obj){
        total += obj[key];
    }
    return total;
}
// m([1,2,3],[55,12,33]) => [56,14,36], m([2,3],[5,-1]) => [7,2]
function m(a, b) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        result[i] = a[i] + b[i];
    }
    return result;
}
// n(1)(2)(3) => 6, n(5)(25)(8) => 38, n(3)(-5)(0) => -2
function n(e) {
    return function (one) {
        return function (two) {
            return e + one + two;
        }
    }
}
