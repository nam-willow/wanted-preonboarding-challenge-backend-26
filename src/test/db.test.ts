import { pool } from '../database/mysql';

describe('Database Connection', () => {
  it('should connect to the database and retrieve databases', async () => {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SHOW DATABASES');
    
    await connection.release();
    // rows의 길이를 확인
    const databases = Array.isArray(rows) ? rows : [rows]; // rows를 배열로 변환
    expect(databases.length).toBeGreaterThan(0); // 변경된 코드
  });

  afterAll(async() => {
    await pool.end();
  } )
});