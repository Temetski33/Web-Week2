const target = document.getElementById('target');

let browserName = 'Unknown';
let browserVersion = 'Unknown';

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



target.insertAdjacentHTML('beforeend', `<p>Browser: ${browserName}, ${browserVersion}</p>`);
