// npm test 또는 npx jest 명령어 치면 실행되는 파일.

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/src/test/setup.ts"], // setup.ts 파일 추가
  testMatch: ["**/src/test/**/*.test.ts"], // 테스트 파일 경로 설정
};
