import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['.*\.spec\.ts'] // we're ignoring jasmine tests
};
export default config;
