/**
 * Error interface for type assertion
 */
export interface CustomError extends Error {
  error?: string; // Optional property
  message: string; // sqlMessage
  code?: string; // SQL 오류 코드 추가 (Optional)
}
