function semaphore(person = "cross", light = "green", cars = "wait") {

        heart = (person === 'cross' && cars === 'pass') ? false : true
    
        return heart;
}


// Genera una función que devuelva si el peatón vive o muere (true o false)
// Implementa la solución solamente con ifs ternarios.