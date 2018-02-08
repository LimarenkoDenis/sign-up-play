module.exports = {
  "globals": {
    "ts-jest": {
      "tsConfigFile": "test.tsconfig.json"
    }
  },
  "moduleNameMapper": {
    "\\.(css|scss|png|svg)$": "identity-obj-proxy",
  },
  "transform": {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "testMatch": [
    "<rootDir>/src/**/*.spec.{ts,tsx}",
  ],
  "collectCoverage": true,
  "coverageReporters": ["text-summary"],
  "collectCoverageFrom": [
    "**/*.{ts,tsx}", "!**/node_modules/**", "!**/*.d.ts"
  ],
  "silent": true,
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json"
  ]
};
