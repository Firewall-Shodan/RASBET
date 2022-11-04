export default {
  secret_token: process.env.SECRET_TOKEN,
  expires_in_token: process.env.EXPIRES_IN_TOKEN,
  expires_in_token_days: Number(process.env.EXPIRES_IN_TOKEN_DAYS),
  expires_in_link_hours: Number(process.env.EXPIRES_IN_LINK_HOURS),
};
