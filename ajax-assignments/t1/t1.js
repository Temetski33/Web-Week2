const getUsers = async () => {
  try {
    const resp = await fetch(requestURL, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    const data = await resp.json();
    return data;
  } catch (err) {
    console.error('fetch failed:', err);
  }
};

const requestURL = 'https://reqres.in/api/users/1';

getUsers(requestURL).then(user => console.log(user));
