import { prisma } from '@/lib/prisma';
import { User } from '@prisma/client';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

interface ExtendedNextApiRequest extends NextApiRequest {
  user: User;
}
const withProtect = (handler: NextApiHandler) => {
  return async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    if (req.cookies && req.cookies.token) {
      try {
        const user: User | null = await prisma.user.findUnique({
          where: {
            id: parseInt(req.cookies.token),
          },
        });
        if (!user) {
          res.status(401).end('Unauthorized');
          return;
        }
        req.user = user;
        return handler(req, res);
      } catch (error) {
        console.log('error', error);
        res.status(500).send(error);
      }
    }
  };
};

export default withProtect;
