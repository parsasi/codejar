export default () => {
    return process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : 'http://codejar.live/'
}