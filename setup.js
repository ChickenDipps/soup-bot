const open = require('sqlite');
const sqlite3 = require('sqlite3');

export async function setup() {
  const db = await open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
  await db.migrate({ migrationpath: './migrations' });
  await db.close();
}
