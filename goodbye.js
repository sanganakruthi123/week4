(function(week4) {
    var sayBye = new Object();
    var word = "Good Bye";
    sayBye.speak = function speak(name) {
        console.log(word + " " + name);
    };
    window.sayBye = sayBye;
}
)(week4);