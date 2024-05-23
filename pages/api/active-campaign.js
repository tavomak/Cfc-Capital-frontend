// eslint-disable-next-line import/no-extraneous-dependencies
import fetch from 'node-fetch';
import { serviceMap } from '@utils/constants';

const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    'Api-Token': process.env.NEXT_PUBLIC_ACTIVE_CAMPAIGN_API_KEY,
  },
};

export default async function handler(req, res) {
  const { body } = req;

  const data = JSON.parse(body);
  const {
    contact: {
      email,
      firstName,
      lastName,
      phone,
      tag,
    },
  } = data;

  try {
    const createContact = await fetch(
      `${process.env.NEXT_PUBLIC_ACTIVE_CAMPAIGN_API_URL}/contacts`,
      {
        ...options,
        body: JSON.stringify({
          contact: {
            email,
            firstName,
            lastName,
            phone,
          },
        }),
      },
    );
    const contactData = await createContact.json();

    if (contactData.errors) {
      return res.status(400).json({ ...contactData.errors[0] });
    }

    const { contact: { id } } = contactData;

    const addTag = await fetch(
      `${process.env.NEXT_PUBLIC_ACTIVE_CAMPAIGN_API_URL}/contactTags`,
      {
        ...options,
        body: JSON.stringify({
          contactTag: {
            contact: id,
            tag: serviceMap[tag],
          },
        }),
      },
    );
    const tagData = await addTag.json();

    if (tagData.errors) {
      return res.status(400).json({ ...tagData.errors[0] });
    }

    const addToList = await fetch(
      `${process.env.NEXT_PUBLIC_ACTIVE_CAMPAIGN_API_URL}/contactLists`,
      {
        ...options,
        body: JSON.stringify({
          contactList: {
            list: 1,
            contact: id,
            status: 1,
          },
        }),
      },
    );

    const listData = await addToList.json();

    if (listData.errors) {
      return res.status(400).json({ ...listData.errors[0] });
    }

    return res.status(200).json({
      contactData,
      addTag,
      listData,
    });
  } catch (error) {
    return res.status(422).json({ error, message: 'Something went wrong' });
  }
}
