import {defineConfig} from 'drizzle-kit';

import { CONFIG } from './configs/config.js';

export default defineConfig({
  out: './drizzle',
  schema: './db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: CONFIG.DATABASE.URL!,
  },
});
