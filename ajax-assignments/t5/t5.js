// your code here

// Fetch restaurants
const fetchRestaurants = async () => {
  try {
    const resp = await fetch(
      'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants'
    );
    const restaurants = await resp.json();
    return restaurants;
  } catch (err) {
    console.error('fetch failed:', err);
  }
};

const getDailyMenu = async id => {
  try {
    const lang = 'en';
    const resp = await fetch(
      `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${id}/${lang}`
    );
    const menu = await resp.json();
    return menu;
  } catch (err) {
    console.error('fetch failed:', err);
  }
};

const table = document.querySelector('table');
const dialog = document.querySelector('dialog');

// Wrap main functionality in async function
const displayRestaurants = async () => {
  const restaurants = await fetchRestaurants();

  // Sort by name
  restaurants.sort((a, b) => a.name.localeCompare(b.name));

  // Loop through restaurants and add rows
  restaurants.forEach(r => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = r.name;

    const addressCell = document.createElement('td');
    addressCell.textContent = r.address;

    row.appendChild(nameCell);
    row.appendChild(addressCell);
    table.appendChild(row);
  });

  // Add event listener for table
  table.addEventListener('click', async e => {
    const row = e.target.closest('tr');
    if (!row) return;

    // Remove other highlights
    table.querySelectorAll('tr').forEach(r => r.classList.remove('highlight'));

    // Add highlight
    row.classList.add('highlight');

    // Get restaurant name from the row cells
    const name = row.cells[0].textContent;

    // Find restaurant from array
    const restaurant = restaurants.find(r => r.name === name);

    const address = restaurant.address;
    const postalCode = restaurant.postalCode;
    const city = restaurant.city;
    const phone = restaurant.phone;
    const company = restaurant.company;

    const menu = await getDailyMenu(restaurant._id);
    if (menu.courses.length > 0) {
      console.log(menu.courses[0].name);
    }

    // Fill dialog content
    dialog.innerHTML = `
    <form method="dialog">
      <p><strong>${name}</strong></p>
      <p>${address}</p>
      <p>${postalCode}</p>
      <p>${city}</p>
      <p>${phone}</p>
      <p>${company}</p>
      <button>Close</button>
    </form>
  `;

    // Open the dialog
    dialog.showModal();
  });
};

displayRestaurants();
