const getUsers = async () => {
  try {
    const resp = await fetch(requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify({
        name: 'John Doe',
        job: 'Developer'
      }),
    });

    const data = await resp.json();
    return data;
  } catch (err) {
    console.error('fetch failed:', err);
  }
};

const requestURL = 'https://reqres.in/api/users';

getUsers(requestURL).then(user => console.log(user));
