const { networkInterfaces } = require('os');

function getLocalIP() {
  const interfaces = networkInterfaces();
  const addresses = [];

  for (const interfaceName in interfaces) {
    const interfaceInfo = interfaces[interfaceName];

    for (const iface of interfaceInfo) {
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push(iface.address);
      }
    }
  }

  return addresses;
}

module.exports = getLocalIP;
