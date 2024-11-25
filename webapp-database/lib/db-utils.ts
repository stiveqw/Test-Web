import { RowDataPacket, OkPacket, ResultSetHeader, FieldPacket } from 'mysql2/promise';
import pool from './db';

// Define a type for SQL parameter values
type SqlParameter = string | number | boolean | Date | Buffer | null;

export async function query<T extends RowDataPacket>(sql: string, values: SqlParameter[] = []): Promise<T[]> {
  const [rows] = await pool.query<T[]>(sql, values);
  return rows;
}

export async function execute(sql: string, values: SqlParameter[] = []): Promise<OkPacket | ResultSetHeader> {
  const [result]: [OkPacket | ResultSetHeader, FieldPacket[]] = await pool.execute(sql, values);
  return result;
}

