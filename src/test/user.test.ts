import { describe, expect, test } from "@jest/globals";
import { Jwt } from "../../util/jwt";
import { Login } from "../entity/user.interface";
import { AppDataSource } from "../../util/database/mysql";
import { User } from "../entity/user.entity";
import { services } from "../services/user-services";

describe("로그인 관련 test", () => {
  test("jwt.sign - should generate a valid token", () => {
    // given
    const jwt = new Jwt();
    const user = {
      id: 11,
      email: "test@example.com",
      password: "1234",
      name: "홍길동",
      phone: "01012345678",
      address: "서울특별시 강남구",
      postcode: "12345",
      createDate: "2024-12-18",
    };

    // when
    const token = jwt.sign(user);

    // then
    expect(token).toBeDefined();
    expect(typeof token).toBe("string");
  });

  test("login - success", async () => {
    // given
    const user1: Login = {
      email: "test@example.com",
      password: "yourpassword",
    };

    // when
    const result1 = await services.login(user1); // 로그인 시도

    // then
    expect(result1).toBeDefined();
    expect(result1.message).toBe("token is created"); // 메시지 확인
  });

  test("login - email not found", async () => {
    // given
    const user2: Login = {
      email: "notfound@example.com", // 존재하지 않는 이메일
      password: "yourpassword",
    };

    // then
    await expect(services.login(user2)).rejects.toMatchObject({
      error: "NOT_FOUND",
      message: "가입한 USER가 없습니다.",
    });
  });

  test("login - incorrect password", async () => {
    // given
    const user3: Login = {
      email: "test@example.com",
      password: "wrongpassword", // 잘못된 비밀번호
    };

    // then
    await expect(services.login(user3)).rejects.toMatchObject({
      error: "INCORRECT",
      message: "비밀번호가 다릅니다.",
    });
  });

  test("jwt.valid - token ckeck", () => {
    // given
    const jwt = new Jwt();
    const token: string = "";
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJuYW1lIjoi7ZmN6ri464-ZIiwicGhvbmUiOiIwMTAxMjM0NTY3OCIsImlhdCI6MTczNDYyMDY5OCwiZXhwIjoxNzM0NjIxNTk4LCJpc3MiOiJ3YW50ZWRNYXJrZXQifQ.-4MeaZXTma4_5GxKMWZTZFx-c1BlkDXvI9Z1b6X8XDk";

    // when
    const result = jwt.verify(token);

    // then
    expect(result).toBeDefined();
  });
});
