/* eslint-disable functional/immutable-data */

const config = require('./jest.config');
config.testMatch.push('<rootDir>/storyshots.runner.ts');

module.exports = config;
