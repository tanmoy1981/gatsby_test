module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        accessToken: 'd62a4ab95d68b52dd3426916d9f4667d737b945fe92f5af9fa2ef4a6d1d0fd9e78e7b3dadaf0b5884aba6e6810841f1e9db7892397d590a9700e46d242acd1cb00295b05110d52d7d75eaab723d43999d0ab0aca79e218415a867ab218eae74ada69605205da2f51cc5e49be5b59259bdab0406ecb969af0745fd948693ef749',
        collectionTypes: ["article"]
      },
    },
  ],
}
