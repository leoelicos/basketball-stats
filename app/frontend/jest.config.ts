import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
   testEnvironment: 'jsdom',
   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
   transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
   },
   testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
   collectCoverage: true,
   coverageDirectory: 'coverage',
   setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
   coverageReporters: ['json', 'html', 'text'],
   moduleNameMapper: {
      // prevent jest trying to test these files
      '\\.(jpg|jpeg|png|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
      '\\.css$': '<rootDir>/src/__mocks__/styleMock.js'
   }
}

export default config
