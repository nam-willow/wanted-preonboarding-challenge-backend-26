// const productModels = require("../models/product-models");

import { AppDataSource } from "../../util/database/mysql";
import { Products } from "../entity/product.entity";
import { Jwt } from "../../util/jwt";
import { CustomError } from "../../util/err/error";

export const services = {
  /**
   * 제품 전체 조회
   */
  selectProduct: async (): Promise<Products[]> => {
    console.log("제품 전체 조회 서비스");
    try {
      const productRepository = AppDataSource.getRepository(Products);
      const products = await productRepository.find({
        order: {
          createDate: "DESC",
        },
      });
      await console.log(products);
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      const customError = error as CustomError;
      throw { error: customError.code, message: customError.message };
    }
  },

  /**
   * 제품 상세조회
   */
  selectDetailProduct: async (productId: number): Promise<Products[]> => {
    try {
      const productRepository = AppDataSource.getRepository(Products);
      const products = await productRepository.find({
        where: { id: productId },
        order: {
          createDate: "DESC",
        },
      });
      await console.log(products);
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      const customError = error as CustomError;
      throw { error: customError.code, message: customError.message };
    }
  },
};
