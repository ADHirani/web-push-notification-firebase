const { getMessaging } = require("firebase-admin/messaging");

module.exports = async (token, title, message) => {
  const sendMessage = {
    notification: {
      title,
      body: message,
    },
    token: token,
  };
  // Send a message to the device corresponding to the provided
  // registration token.
  return await getMessaging()
    .send(sendMessage)
    .then((response) => {
      // Response is a message ID string.
      return response;
    })
    .catch((err) => {
      console.log(err);
    })
    .catch((error) => {
      console.log("Error sending message:", error);
    });
};
