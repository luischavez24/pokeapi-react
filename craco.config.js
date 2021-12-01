const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@/(.+)": "<rootDir>/src/$1",
      },
    },
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@@": path.resolve(__dirname, "./"),
    },
    extensions: [".ts", ".tsx"],
  },
};
