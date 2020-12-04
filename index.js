const p = require('path')
const dirpath = p.resolve(__dirname, './../', 'config')

function getConfig(path){
    const yaml = require('js-yaml')
    const fs   = require('fs')
    const p   = require('path')
    const path = p.resolve(__dirname,'config')
    const files = fs.readdirSync(path)
    const config = {}
    files.forEach(file => {
        const content = yaml.safeLoad(fs.readFileSync(p.join(path, file), 'utf8'))
        Object.assign(config, content)
    })
    return config
}

module.exports = getConfig(dirpath)