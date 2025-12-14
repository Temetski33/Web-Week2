const createUser = async () => {
  try {
    const resp = await fetch(requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Returns the json payload with a "real" free api key for my user but not this one.
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify({
        name: 'John Doe',
        job: 'Developer',
      }),
    });

    const data = await resp.json();
    console.log(data);
  } catch (err) {
    console.error('fetch failed:', err);
  }
};

const requestURL = 'https://reqres.in/api/users';

createUser();
