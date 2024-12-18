import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

interface DbConfig {
  host: string;
  user: string;
  port: number;
  password: string;
  database: string;
}

const db_config: DbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || '',
  port: Number(process.env.DB_PORT) || 3000,
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || '',
};

// createPool을 사용하여 연결 풀 생성
const pool = mysql.createPool(db_config);

export { pool }; // pool을 export