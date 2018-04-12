if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://david:david@ds047524.mlab.com:47524/vidjot-prod'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    }
}