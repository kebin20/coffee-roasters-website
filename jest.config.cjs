module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.css$": "jest-css-modules-transform",
  },
  testEnvironment: "jest-environment-jsdom",
};
