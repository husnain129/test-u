const setting = {
  JWT_SECRET: process.env.NEXT_PUBLIC_JWT_SECRET,
};

const getEnv = (name: keyof typeof setting) => {
  return setting[name];
};

export default getEnv;
