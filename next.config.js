/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    experimental: {
        appDir: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['scontent.fbaq2-2.fna.fbcdn.net', '2.img-dpreview.com'],
    },
}

module.exports = nextConfig
