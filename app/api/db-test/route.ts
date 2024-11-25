import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function GET() {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT 1 as test');
    connection.release();
    return NextResponse.json({ message: 'Database connected successfully', data: rows });
  } catch (error) {
    console.error('Database connection failed:', error);
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
  }
}