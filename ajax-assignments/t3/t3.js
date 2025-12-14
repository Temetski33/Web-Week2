const getUsers = async () => {
  try {
    const resp = await fetch(requestURL, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });

    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }

    const data = await resp.json();
    console.log(data);
  } catch (err) {
    console.log('This is an error message for my assignment! Yay!');
    console.error('fetch failed:', err);
  }
};

const requestURL = 'https://reqres.in/api/unknown/23';

getUsers(requestURL).then(user => console.log(user));
