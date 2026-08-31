import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    // Connection options
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    // port: Number(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DB,
    ssl: true,
  }),
  baseURL: {
    allowedHosts: ["*.vercel.app"],
  },
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: ["http://localhost:3000", process.env.BETTER_AUTH_URL || ""],
  secret: process.env.BETTER_AUTH_SECRET,
  plugins: [nextCookies()], // make sure this is the last plugin in the array
});
