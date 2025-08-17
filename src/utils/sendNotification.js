import sendEmailNotification from './emailService';

export const sendNotificationWithLocation = async (location) => {
  const currentTime = new Date().toLocaleString();
  const userAgent = navigator.userAgent;
  const referrer = document.referrer || 'Direct';
  const fullUrl = window.location.href;

  // Get location from IP
  let locationInfo = 'Location unavailable';
  let fullLocationData = '';

  try {
    const response = await fetch('https://free.freeipapi.com/api/json');
    const data = await response.json();

    if (data.ipAddress) {
      locationInfo = `${data.cityName}, ${data.regionName}, ${data.countryName}`;
      fullLocationData = `
        Full Location Data:
        IP: ${data.ipAddress}
        Country: ${data.countryName} (${data.countryCode})
        Region: ${data.regionName}
        City: ${data.cityName}
        ZIP: ${data.zipCode}
        Coordinates: ${data.latitude}, ${data.longitude}
        ISP: ${data.isProxy ? 'Proxy/VPN' : 'Direct'}`;
    }
  } catch (error) {
    console.error('Could not locate:', error);
  }

  sendEmailNotification(
    `Portfolio Visit`,
    `Someone visited your portfolio!
          
      Time: ${currentTime}
      Page: ${location.pathname}
      Full URL: ${fullUrl}
      Location: ${locationInfo}
      Referrer: ${referrer}
      User Agent: ${userAgent}
      
      ${fullLocationData}`,
  );
};

export default sendNotificationWithLocation;