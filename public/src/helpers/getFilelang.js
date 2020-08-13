export default (fileName , fileExtention) => {
    const extentionToLang  = {
        'js' : 'javascript',
        'css' : 'css',
        'cs' : 'csharp',
        'html' : 'html',
        'json' : 'json',
        'ini' : 'ini',
        'ts' : 'typescript',
        'php' : 'php',
        'gitignore' : 'plaintext',
        'py' : 'python',
        'java' : 'java',
        'md' : 'markdown',
        'sql' : 'sql'
    }
    const fileNameToLang = {
        'dockerfile' : 'dockerfile'
    }
    const defaultType = 'plaintext'

    if(extentionToLang[fileExtention]){
        return extentionToLang[fileExtention]
    }else if(fileNameToLang[fileName]){
        return fileNameToLang[fileName]
    }
    return defaultType
}