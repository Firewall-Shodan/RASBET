import { config } from 'dotenv-safe';
config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  allowEmptyValues: true,
});
