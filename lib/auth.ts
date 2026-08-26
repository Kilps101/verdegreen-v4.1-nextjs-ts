import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    // Connection options
  }),
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: ["http://localhost:3000", process.env.BETTER_AUTH_URL || ""],
  secret: process.env.BETTER_AUTH_SECRET,
  plugins: [nextCookies()], // make sure this is the last plugin in the array
});
