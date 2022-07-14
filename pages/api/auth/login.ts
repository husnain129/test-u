import { prisma } from '@/lib/prisma';
import { User } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import JWT from 'utils/jwt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).end('Method not allowed');
    return;
  }
  const { email, password, role } = req.body as User;
  try {
    const user: User | null = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(400).end('Invalid email or password');
      return;
    }

    if (user.password !== password) {
      res.status(400).end('Invalid email or password');
      return;
    }

    if (user.role !== role) {
      res.status(400).end('User role not match with credentials');
      return;
    }

    res.setHeader('Set-Cookie', [
      `token=${JWT().sign(user.id.toString())}; Path=/; Max-Age=${
        60 * 60 * 24 * 7
      }`,
    ]);
    res.status(200).json({ user });
  } catch (error) {
    console.log('error', error);
    res.status(500).send(error);
  }
}
