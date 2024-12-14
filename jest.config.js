// npm test 또는 npx jest 명령어 치면 실행되는 파일.

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.ts'], // test 디렉토리 내의 모든 .ts 파일을 테스트로 인식
};