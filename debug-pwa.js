const nextPwa = require('next-pwa');
console.log('Type of nextPwa:', typeof nextPwa);
if (typeof nextPwa === 'function') {
  const withPWA = nextPwa({ dest: 'public' });
  console.log('Type of withPWA:', typeof withPWA);
} else {
  console.log('nextPwa keys:', Object.keys(nextPwa));
}
