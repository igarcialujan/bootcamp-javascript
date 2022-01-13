function indexOf(string, searchElement, fromIndex = 0) {
    var res = -1
    var j = 0

    for (var i = fromIndex; (i < string.length && res !== -1); i++) {
        var character = string[i]

        if (character === searchElement[j]) {
            j++

            if (j === searchElement.length)
                res = i - j + 1
        } else
            j = 0
    }

    return res
}

// El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no esta presente.