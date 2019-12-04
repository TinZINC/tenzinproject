//write first method
function sleep_in(weekday,vacation) {
    if (weekday == false) {
        return true
    }
    if (vacation == true) {
        return true
    }
    return false
}

//write second method
function monkey_trouble(a, b) {
    if ( (a == true) && (b == true)) {
        return true
    }
    if ( ( a == false) && (b == false)) {
        return true
    }
    return false
}

//add 2-10 below here...

function string_times (word, num) {
    var z = word;
    if (num > 0) {
        for (var i = 1; i < num; i++) {
            z = z + word;
        }
    } else {
        z = "";
    }
    return (z);
}

function front_times (word, num) {
    var word2 = word.substring(0, 3);
    var z = word2
    if (num > 0) {
        for (var i = 1; i < num; i++) {
            z = z + word2;
        }
    } else {
        z = "";
    }
    return (z);
}

function string_bits (word) {
    var thing = "";
    for (var i = 0; i < word.length; i = i + 2) {
        if (i % 2 == 0) {
            thing +=word.substring(i, i + 1)
        }
    }
    return (thing);
}

function caughtSpeeding (num, birthday) {
    if (birthday == true) {
        num = num - 5;
    }

    if (num <= 60) {
        return (0);
    }
    if (61 <= num && num <= 80) {
        return (1);
    }
    if (num >= 81) {
        return (2);
    }
}

function fizz_buzz (num) {
    if ((num % 3 == 0) && (num % 5 == 0)) {
        return "FizzBuzz";
    }
    if (num % 3 == 0) {
        return "Fizz";
    }
    if (num % 5 == 0) {
        return "Buzz";
    }
    return (num + "!");
}

function teaParty (tea, candy) {
    if ((tea < 5) || (candy < 5)) {
        return "0";
    }
    if (((tea / 2) >= candy) || ((candy) / 2) >= tea) {
        return "2";
    }
    return "1";
}

function blackjack (num1, num2) {
    if ((num1 > 21) && (num2 > 21)) {
        return "0";
    }
    if (num1 > 21) {
        return num2;
    }
    if (num2 > 21) {
        return num1;
    }
    if (num1 > num2) {
        return num1;
    }
    if (num2 > num1) {
        return num2
    }
}

function loneSum (a, b, c) {
    if (a == b && a != c) {
        return c
    }
    if (b == c && b != a) {
        return a
    }
    if (c == a && c != b) {
        return b
    }
    if (a == b && b == c) {
        return "0"
    }
    a = a + b + c;
    return a;
}

function firstLast6 (arr) {

    if (arr[0] == 6) {
        return true;
    }
    if (arr[arr.length-1] == 6) {
        return true;
    }
        return false;
}

function has23 (arr) {
    if ((arr[0] == 2) || (arr[1] == 2)) {
        return true;
    }
    if ((arr[0] == 3) || (arr[1] == 3)) {
        return true;
    }
    return false;
}

function fix23 (arr) {
    if (arr[0] == 2) {
        if (arr[1] == 3) {
            arr[1] = 0;
            return arr;
        }
    }
    if (arr[1] == 2) {
        if (arr[2] == 3) {
            arr[2] = 0;
            return arr;
        }
    }
    return arr;
}

function countYZ(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] == "y" || arr[i] == "z") && (arr[i + 1] == " " || arr.length == [i + 1])) {
            count = count + 1;
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] == "Y" || arr[i] == "Z") && (arr[i + 1] == " " || arr.length == [i + 1])) {
            count = count + 1;
        }
    }
    return count;
}

function endOther (arrA, arrB) {
    arrA = arrA.toLowerCase();
    arrB = arrB.toLowerCase();
    if (arrA.length == 1) {
        var last1A = arrA.substring(arrA.length - 1, arrA.length);
        var last1B = arrB.substring(arrB.length - 1, arrB.length);
        if (last1A == last1B) {
            return true;
        } else {
            return false
        }
    }
    var last2A = arrA.substring(arrA.length - 2, arrA.length);
    var last2B = arrB.substring(arrB.length - 2, arrB.length);
    if (last2A == last2B) {
        return true;
    } else {
        return false
    }
}

function starOut (str) {
    var word = str;
    var newword = "";
    var num = 0;
    while (num < str.length) {
        if ( (str[num] != "*") && (str[num + 1] != "*") && (str[num - 1] != "*") ) {
            newword = newword + str[num];
        }
        num += 1;
    }
    return (newword);
}

function getSandwich (str) {
    var newWord = "";
    var lastBread = str.lastIndexOf("b");
    var firstBread = str.indexOf("d");
    var firstBread1 = str.indexOf("b");
    var lastBread1 = str.lastIndexOf("d");
    if ( (firstBread1 + 4)  == lastBread1) {
        return (newWord);
    }
    if (str.includes("d")) {
        newWord = str.substring(firstBread + 1, lastBread);
    }
    return (newWord);
}

function canBalance (arr) {
    var lSum = 0;
    var rSum = 0;
    for(var i = 0; i < arr.length; i++) {
        lSum += arr[i];

        for(var j = i + 1; j < arr.length;j++) {
            rSum += arr[j];
        }
        if(rSum == lSum) {
            return true;
        }
    rSum = 0;
        }
    return false;
}

function countClumps (arr) {
    var num = 0;
    var count = 0;
    while (num < arr.length) {
        if (arr[num] == arr[num + 1]) {
            count = count + 1;
        }
        if ( (arr[num - 1] == arr[num]) && (arr[num] == arr[num +1]) ) {
            count = count - 1;
        }
        num = num + 1;
    }
    return count;
}

function evenlySpaced (a, b, c) {
    var sum = a + b + c;
    if ( (a == b) && (b == c) ) {
        return true;
    }
    if ( (a == b) || (b == c) || (c == a) ) {
        return false;
    }
    if ( (sum / 3) == (a) ) {
        return true;
    }
    if ( ( sum / 3) == (b) ) {
        return true;
    }
    if ( ( sum / 3) == (c) ) {
        return true;
    }
    if ( (sum / 3) == (1) ) {
        return true;
    }
    if ( (sum / 3) == (2) ) {
        return true;
    }
    return false;
}



//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times (true, false);
    document.getElementById("output").innerHTML += front_times (true, false);
    document.getElementById("output").innerHTML += string_bits (true, false);
    document.getElementById("output").innerHTML += caughtSpeeding (true, false);
    document.getElementById("output").innerHTML += fizz_buzz (true, false);
    document.getElementById("output").innerHTML += teaParty (true, false);
    document.getElementById("output").innerHTML += blackjack (true, false);
    document.getElementById("output").innerHTML += loneSum (true, false);
    document.getElementById("output").innerHTML += firstLast6 (true, false);
    document.getElementById("output").innerHTML += has23 (true, false);
    document.getElementById("output").innerHTML += fix23 (true, false);
    document.getElementById("output").innerHTML += countXY (true, false);
    document.getElementById("output").innerHTML += endOther (true, false);
    document.getElementById("output").innerHTML += starOut (true, false);
    document.getElementById("output").innerHTML += getSandwich (true, false);
    document.getElementById("output").innerHTML += canBalance (true, false);
    document.getElementById("output").innerHTML += countClumps (true, false);
    document.getElementById("output").innerHTML += evenlySpaced (true, false);
}
