// eslint-disable-next-line import/no-extraneous-dependencies
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { body } = req;

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'Api-Token': process.env.NEXT_PUBLIC_ACTIVE_CAMPAIGN_API_KEY,
    },
    body,
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ACTIVE_CAMPAIGN_API_URL}/contacts`, options);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(422).json({ error, message: 'Something went wrong' });
  }
}
