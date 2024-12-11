import axios from "axios";
const portOne = require("../services/portone-services");

module.exports = {
  /**
   * 결제 상세내역 조회 API
   */
  paymentsBalance: async (imp_uid: string) => {
    try {
      const token = await portOne.portGetToken();
      const pay_res = await portOne.getPayDitail(imp_uid, token);
      return pay_res;
    } catch (error) {
      console.error("Error fetching payment balance:", error);
      throw new Error("결제 상세내역 조회 중 오류가 발생했습니다.");
    }
  },

};
