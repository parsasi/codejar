export default () => {
    return process.env.NODE_ENV === 'development' ? process.env["REACT_APP_DEVELOPMENT_SERVER_URL"] : process.env["REACT_APP_PRODUCTION_SERVER_URL"]
}