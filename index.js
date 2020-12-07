const p = require('path')
const dirpath = p.resolve(__dirname, './../../', 'config')
const supported = ['.yaml', '.yml']

function allowed(file){
    const ext = p.extname(file.toLowerCase())
    if(supported.includes(ext)) return file
}

function getConfig(path){
    const yaml = require('js-yaml')
    const fs   = require('fs')
    const files = fs.readdirSync(path)
    const config = {}
    files.filter(allowed).forEach(file => {
        const content = yaml.safeLoad(fs.readFileSync(p.join(path, file), 'utf8'))
        Object.assign(config, content)
    })
    return config
}

module.exports = getConfig(dirpath)