import { pool } from '../database/mysql'; // pool을 가져옵니다.

module.exports = {
/**
 * 회원가입
 */
userCreate: async (email: string) => {
  try {
    const connection = await pool.getConnection(); // 풀에서 연결을 가져옵니다.
    console.log("회원가입 모델: ", email);

    // 이메일로 사용자 조회 쿼리
    const query = `SELECT * FROM user`;
    const [rows] = await connection.query(query); // 쿼리 실행
    console.log("user 조회: ", rows)
    
    await connection.release(); // 연결을 풀에 반환합니다.
    return rows; // 조회된 결과 반환
  } catch (error) {
    console.error("Error in userCreate:", error);
    throw new Error("회원가입 처리 중 오류가 발생했습니다."); // 오류를 다시 던져서 호출한 곳에서 처리할 수 있도록 합니다.
  }
},
}