import { prisma } from '@/lib/prisma';
import { User } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).end('Method not allowed');
    return;
  }
  const { name, email, password, role } = req.body as User;
  try {
    const user: User = await prisma.user.create({
      data: {
        name,
        email,
        password,
        role: role || 'STUDENT',
      },
    });
    res.setHeader('Set-Cookie', [
      `token=${user.id}; Path=/; Max-Age=${60 * 60 * 24 * 7}`,
    ]);
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.log('error', error);
    res.status(500).send(error);
  }
}
