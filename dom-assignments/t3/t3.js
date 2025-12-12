const target = document.getElementById('target');

let browserName = 'Unknown';
let browserVersion = 'Unknown';

let osName = 'Unknown';

const screenWidth = screen.width;
const screenHeighth = screen.height;

const availableWidth = window.innerWidth;
const availableHeighth = window.innerHeight;

const now = new Date();

const formatter = new Intl.DateTimeFormat('fi-FI', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

const userAgent = navigator.userAgent;

if (userAgent.indexOf('Firefox') > -1) {
  browserName = 'Mozilla Firefox';
  browserVersion = userAgent.match(/Firefox\/([0-9.]+)/)[1];
} else if (userAgent.indexOf('Edg') > -1) {
  browserName = 'Microsoft Edge';
  browserVersion = userAgent.match(/Edg\/([0-9.]+)/)[1];
} else if (userAgent.indexOf('Chrome') > -1) {
  browserName = 'Google Chrome';
  browserVersion = userAgent.match(/Chrome\/([0-9.]+)/)[1];
} else if (userAgent.indexOf('Safari') > -1) {
  browserName = 'Safari';
  browserVersion = userAgent.match(/Version\/([0-9.]+)/)[1];
}

if (/Windows/.test(userAgent)) osName = 'Windows';
else if (/Macintosh/.test(userAgent)) osName = 'MacOS';
else if (/Linux/.test(userAgent)) osName = 'Linux';
else if (/Android/.test(userAgent)) osName = 'Android';
else if (/iPhone|iPad|iPod/.test(userAgent)) osName = 'iOS';

target.insertAdjacentHTML(
  'beforeend',
  `<p>Browser: ${browserName}, ${browserVersion}</p>`
);

target.insertAdjacentHTML('beforeend', `<p>OS: ${osName}</p>`);

target.insertAdjacentHTML(
  'beforeend',
  `<p>Screen size: ${screenWidth}x${screenHeighth}</p>`
);

target.insertAdjacentHTML(
  'beforeend',
  `<p>Available window size: ${availableWidth}x${availableHeighth}</p>`
);

target.insertAdjacentHTML(
  'beforeend',
  `<p>Date and time: ${formatter.format(now)}</p>`
);
