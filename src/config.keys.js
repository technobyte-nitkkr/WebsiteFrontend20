const Keys = Object.freeze({
    OAUTH_SECRET: process.env.REACT_APP_GSECRET,
    OAUTH_CLIENT_ID: process.env.REACT_APP_GCID,
    JWT_SECRET: process.env.REACT_APP_TOKEY,
    BASE_API: 'https://us-central1-techspardha-87928.cloudfunctions.net/api'
})

export default Keys;