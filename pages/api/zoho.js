export default async function handler(req, res) {
  const { body } = req;

  const data = JSON.parse(body);

  try {
    const {
      contact: { email, firstName, lastName, phone, tag },
    } = data;

    const contactData = {
      'First+Name': firstName,
      'Last+Name': lastName,
      'Contact+Email': email,
      Phone: phone,
    };

    const authorization = await fetch(
      `${process.env.ZOHO_AUTH_URL}?client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&grant_type=${process.env.ZOHO_GRANT_TYPE}&scope=${process.env.ZOHO_SCOPE}&soid=${process.env.ZOHO_SOID}`,
      {
        method: 'POST',
        redirect: 'follow',
      }
    );

    const { access_token, error } = await authorization.json();

    if (!access_token || error) {
      return res
        .status(401)
        .json({ error, message: 'Error while getting access token' });
    }

    const create_contact = await fetch(
      `${process.env.ZOHO_CAMPAINS_URL}?resfmt=JSON&listkey=${
        process.env.ZOHO_LIST_KEY
      }&contactinfo=${encodeURI(
        JSON.stringify(contactData)
      )}&source=${encodeURIComponent(`Sitio Web ${tag}`)}`,
      {
        method: 'POST',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Zoho-oauthtoken ${access_token}`,
        },
      }
    );

    const { status, code, message } = await create_contact.json();

    if (status === 'error') {
      return res.status(422).json({ error, message });
    }

    return res.status(200).json({
      status,
      code,
      message,
    });
  } catch (error) {
    return res.status(422).json({ error, message: 'Something went wrong' });
  }
}
