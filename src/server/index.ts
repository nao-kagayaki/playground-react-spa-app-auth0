import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { expressjwt } from "express-jwt";
import jwksRsa, { type GetVerificationKey } from "jwks-rsa";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const checkJwt = expressjwt({
  // https://github.com/auth0/node-jwks-rsa/tree/master/examples/express-demo#jwks-rsa---express-example
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }) as GetVerificationKey,
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
});

app.get("/api/protected", checkJwt, (_, res) => {
  res.json({
    message: "This is a protected route",
  });
});

// サーバーの起動
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API Server is running on http://localhost:${PORT}`);
});
