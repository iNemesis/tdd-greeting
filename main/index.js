exports.greeter = function(name) {
    var greet = "";

    if (name == undefined) {
        greet = "Hello!";
        return greet;
    }

    if (Array.isArray(name)) {
        name = decomposeNames(name);
        upperNames = extractUpperNames(name);
        lowerNames = extractLowerNames(name);

        if (lowerNames.length <= 2) {
            greet = "Hello, "+lowerNames.join(" and ")+"!";
        } else {
            lowerNames[lowerNames.length-1] = "and " + lowerNames[lowerNames.length-1]
            greet = "Hello, "+lowerNames.join(", ")+"!";
        }

        if (upperNames.length > 0) {
            greet = greet.substr(0, greet.length-1) + ". AND HELLO " + upperNames.join(", ") + "!";
        }
    } else {
        if (isUpperCase(name)) {
            greet = ("Hello, "+name+"!").toUpperCase();
        } else {
            greet = "Hello, "+name+"!";
        }
    }

    return greet;
}

function decomposeNames(names) {
    var decomposedNames = [];
    names.forEach(name => {
        if (name[0] == '"' && name[name.length-1] == '"') {
            decomposedNames.push(name.substr(1, name.length-2));
        } else {
            decomposedNames.push(name.split(', '));
        }
    });

    return decomposedNames.flat();
}

Array.prototype.flat = function() {
    return this.reduce((acc, val) => acc.concat(val), []);
}

function extractUpperNames(names) {
    var upperNames = [];
    names.forEach(name => {
        if (isUpperCase(name)) {
            upperNames.push(name)
        }
    });

    return upperNames;
}

function extractLowerNames(names) {
    var lowerNames = [];
    names.forEach(name => {
        if (!isUpperCase(name)) {
            lowerNames.push(name)
        }
    });

    return lowerNames;
}

function isUpperCase(text) {
    for (let index = 0; index < text.length; index++) {
        const letter = text[index];
        if (letter !== letter.toUpperCase()) return false;
    }

    return true;
}
