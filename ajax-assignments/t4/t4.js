// Generic fetch function
const fetchData = async (url, options) => {
  try {
    const resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }

    const data = await resp.json();
    return data;
  } catch (err) {
    console.log('This is my own error console log!')
    console.error('fetch failed:', err);
    throw err;
  }
};

// Test function
const testFetch = async () => {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer',
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify(user),
    };
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

// Run test
testFetch();
