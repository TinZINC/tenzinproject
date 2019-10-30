//write first method
function sleep_in(weekday,vacation) {
    return weekday;
}

//write second method
function monkey_trouble(param1, param2) {
    return param1;
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
    //test third method, etc
}
