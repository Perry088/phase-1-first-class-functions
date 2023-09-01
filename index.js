function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction(){
    return function named(){
        return 'hello'
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return 'hi'
    }
}