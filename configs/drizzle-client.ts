import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import {CONFIG} from './config.js';

const client = postgres(CONFIG.DATABASE.URL!, {prepare: false});
const db = drizzle(client);

export {client, db};
