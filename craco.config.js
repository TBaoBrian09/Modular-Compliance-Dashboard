const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  jest: {
    configure: {
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    }
  }
};
