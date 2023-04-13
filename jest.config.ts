import type { Config } from "jest";

const config: Config = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
  transform: {
    "\\.ts$": ["babel-jest", { configFile: "./jest.babel.config.js" }],
  },
};

export default config;
