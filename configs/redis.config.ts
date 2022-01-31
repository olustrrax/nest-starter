import { registerAs } from '@nestjs/config';

interface IRedisConfig {
  host: string;
  port: number;
}

export default registerAs(
  'redis',
  (): IRedisConfig => ({
    host: process.env.REDIS_URL,
    port: +process.env.REDIS_PORT || 6379,
  }),
);
