import Dexie from 'dexie';

// Initialize the local database
export const db = new Dexie('pfmDB');

db.version(1).stores({
  profiles: 'user_id, storage_mode',
  accounts: 'fk_account_id, fk_user_id',
  transactions: 'transaction_id, account_id, transaction_date'
});