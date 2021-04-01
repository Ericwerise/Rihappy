import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  readonly name: string;
};

export default (request: NextApiRequest, response: NextApiResponse<Data>): void => {
  response.status(200).json({ name: 'John Doe' });
};
