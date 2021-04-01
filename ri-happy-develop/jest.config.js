/* eslint-disable functional/immutable-data */

module.exports = {
  roots: ["<rootDir>"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]", "__tests__/helpers.ts"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(ts|tsx|js)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    "^src/(.*)": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/typings.d.ts", "!src/pages/_app.tsx"],
  testMatch: ["<rootDir>/__tests__/**/*.test.{ts,tsx}"],
};
