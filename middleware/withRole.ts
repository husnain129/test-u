import { User } from '@prisma/client';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

interface ExtendedNextApiRequest extends NextApiRequest {
  user: User;
}

const withRole = (handler: NextApiHandler, role: User['role']) => {
  return async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    if (role && req.user && req.user.role !== role) {
      res.status(403).end('Forbidden');
      return;
    }
    return handler(req, res);
  };
};

export default withRole;
