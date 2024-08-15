import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './app/drizzle/**/schema.js',
  out: './drizzle',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: process.env.DATABASE_URL,
    
  },
});