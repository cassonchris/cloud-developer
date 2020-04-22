export const config = {
  "dev": {
    "username": process.env.UDAGRAM_DEV_DB_USERNAME,
    "password": process.env.UDAGRAM_DEV_DB_PASSWORD,
    "database": process.env.UDAGRAM_DEV_DB_CATALOG,
    "host": process.env.UDAGRAM_DEV_DB_HOST,
    "dialect": process.env.UDAGRAM_DEV_DB_DIALECT,
    "aws": {
      "region": process.env.UDAGRAM_DEV_AWS_REGION,
      "profile": process.env.UDAGRAM_DEV_AWS_PROFILE,
      "media_bucket": process.env.UDAGRAM_DEV_AWS_MEDIA_BUCKET
    }
  },
  "prod": {
    "username": process.env.UDAGRAM_PROD_DB_USERNAME,
    "password": process.env.UDAGRAM_PROD_DB_PASSWORD,
    "database": process.env.UDAGRAM_PROD_DB_CATALOG,
    "host": process.env.UDAGRAM_PROD_DB_HOST,
    "dialect": process.env.UDAGRAM_PROD_DB_DIALECT,
    "aws": {
      "region": process.env.UDAGRAM_PROD_AWS_REGION,
      "profile": process.env.UDAGRAM_PROD_AWS_PROFILE,
      "media_bucket": process.env.UDAGRAM_PROD_AWS_MEDIA_BUCKET
    }
  }
}
