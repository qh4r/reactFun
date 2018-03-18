//npm i -D jest @types/jest ts-jest enzyme @types/enzyme enzyme-adapter-react-16

module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/src/setupEnzyme.ts",
}