(function() {
    var names = ["havi", "kru", "Jack", "Jen", "murali", "bala", "bheri", "shankar", "java", "jenney"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            sayBye.speak(names[i]);
        } else {
            sayHello.speak(names[i]);
        }
    }
})();
