import axios from "axios";
import dotenv from "dotenv";
dotenv.config(); // 환경 변수 로드

// 환경 변수
const PORTONE_IMP_KEY = process.env.PORTONE_IMP_KEY;
const PORTONE_IMP_SECRET = process.env.PORTONE_IMP_SECRET;

module.exports = {
  /**
   * access_token 발급 API
   */
  portGetToken: async (): Promise<string> => {
    try {
      const result = await axios({
        url: "https://api.iamport.kr/users/getToken", // 통신할 웹문서
        method: "post", // 통신 방식
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          // 보낼 데이터
          imp_key: PORTONE_IMP_KEY,
          imp_secret: PORTONE_IMP_SECRET,
        },
      });
      return result.data?.response?.access_token; // Access token 반환
    } catch (error) {
      console.error("Error fetching token:", error);
      throw new Error("토큰 발급 중 오류가 발생했습니다."); // 오류를 다시 던져서 호출한 곳에서 처리할 수 있도록 합니다.
    }
  },

  /**
   * 결제 상세내역 조회 API
   */
  getPayDitail: async (imp_uid: string, token: string): Promise<object> => {
    try {
      const result = await axios({
        url: `https://api.iamport.kr/payments/${imp_uid}/balance`, // 통신할 웹문서
        method: "get", // 통신 방식
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (result.data.code === -1) {
        throw new Error(result.data.message); // 결제 상태가 paid 또는 cancelled가 아닌 경우 오류 발생
      }

      return result.data; // 결제 상세내역 반환
    } catch (error) {
      console.error("Error fetching payment details:", error);
      throw new Error("결제 상세내역 조회 중 오류가 발생했습니다."); // 오류를 다시 던져서 호출한 곳에서 처리할 수 있도록 합니다.
    }
  },
};
