const sendEmailNotification = async (subject, text) => {
  try {
    const response = await fetch('https://sendemail-p4resk4eia-uc.a.run.app', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject,
        text,
      }),
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export default sendEmailNotification;