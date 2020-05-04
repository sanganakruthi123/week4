(function(week4) {
    var sayHello = new Object();
    var word = "Hello";
    sayHello.speak = function(name) {
        console.log(word + " " + name);
    };
    window.sayHello = sayHello;
})(week4);