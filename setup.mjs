import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function main() {
  const db = await open({
    filename: './db.sqlite',
    driver: sqlite3.Database,
    verbose: true,
  });
  await db.migrate({ migrationsPath: './migration' });
  return db;
}

main();
