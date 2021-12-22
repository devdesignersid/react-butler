module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/app/tests/__mocks__/svg.ts',
    '\\.(woff|ttf|eot|svg)$': '<rootDir>/app/tests/__mocks__/fileMock.ts',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/app/tests/__mocks__/fileMock.ts',
    '^@/(.*)$': '<rootDir>/app/$1'
  }
};
