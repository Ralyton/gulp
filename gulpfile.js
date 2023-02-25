function funcaoPadrao(callback) {
    console.log('Executando via Gulp')
    callback()
}

function dizOi() {
    console.log('Oi Gulp')
    dizTchau()
}

function dizTchau() {
    console.log('Tchau Gulp')
}

exports.default = funcaoPadrao
exports.dizOi = dizOi