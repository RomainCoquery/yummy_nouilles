module.exports = {
    map: {
        inline: true,
    },
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default'
        })
    ]
}