import { pool } from './mysql';

async function run() {
  try {
    const connection = await pool.getConnection();
    console.log('Database connection successful!');

    // const [rows] = await connection.query('SHOW DATABASES');
    const [rows] = await connection.query('SHOW DATABASES');
    console.log('Available databases:', rows);

    await connection.release();
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

run();