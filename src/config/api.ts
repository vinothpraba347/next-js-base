/** rest api defaults and config can be defined here' */

const apiConfig = {
  /** change according to environment */
  publicInstanceCode: process.env.NEXT_PUBLIC_INSTANCE_CODE,
} as const;

export { apiConfig };
