function push(array, ...elements) {
    var args = [...elements]
    
    for (var i = 0; i < args.length; i++)
        array[array.length] = args[i]

    return array.length
}

// El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.