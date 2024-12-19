import Joi from "joi"; // Joi를 import
import { Request, Response, NextFunction } from "express";
import { CustomError } from "../util/err/error";

// ParamsSchema 인터페이스 정의
interface ParamsSchema {
  [key: string]: Joi.Schema; // 키는 문자열, 값은 Joi.Schema 타입
}

// 공통 validator
const validator = async (
  schema: Joi.ObjectSchema,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const value = await schema.validateAsync(req.body);
    next();
  } catch (err) {
    const customError = err as CustomError;
    const formattedError = customError.message.replace(/\\/g, "").replace(/"/g, "");
    res.status(400).json({ error: formattedError });
  }
};
// 공통 validator
const paramsValidator = async (
  schema: Joi.ObjectSchema,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const value = await schema.validateAsync(req.params);
    next();
  } catch (err) {
    const customError = err as CustomError;
    const formattedError = customError.message.replace(/\\/g, "").replace(/"/g, "");
    res.status(400).json({ error: formattedError });
  }
};

export const validators = {
  /***
   * 로그인
   */
  userLogin: async (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }).unknown(true);

    await validator(schema, req, res, next);
  },

  /***
   * params validation
   */
  params: (paramList: Array<string>) => {
    return (req: Request, res: Response, next: NextFunction) => {
      // console.log("paramList: ", paramList);
      const schemaObj: ParamsSchema = {}; // 스키마 객체 초기화

      for (const key of paramList) {
        // console.log("key: ", key);
        if (paramsSchema[key]) {
          // console.log("paramsSchema[key]: ", paramsSchema[key]);
          schemaObj[key] = paramsSchema[key]; // paramsSchema에서 키에 해당하는 스키마 가져오기
        }
      }

      const schema = Joi.object({
        ...schemaObj,
      });

      paramsValidator(schema, req, res, next); // validator 호출
    };
  },
};

// 기본 paramsSchema 정의
const paramsSchema: ParamsSchema = {
  id: Joi.number().required().positive(),
  // 다른 파라미터 추가 가능
};
