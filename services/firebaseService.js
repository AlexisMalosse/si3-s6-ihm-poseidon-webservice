const admin = require('firebase-admin');

const serviceAccount = require('../firebase-key/poseidon-ffb1a-firebase-adminsdk-9ol7b-ad20e62a7b.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // Autres options de configuration
  });

async function sendNotification(token, title, body) {
  const message = {
    notification: {
      title: title,
      body: body
    },
    token: token
  };

  try {
    const response = await admin.messaging().send(message);
    console.log('Notification envoyée avec succès:', response);
  } catch (error) {
    //console.error('Erreur lors de l\'envoi de la notification:', error);
 
  const fs = require('fs');
  fs.writeFile('error.txt', error, (err) => {
    if (err) throw err;
    console.log('Erreur écrite dans error.txt');
  });

    
  }
}

// Exportez la fonction sendNotification pour l'utiliser dans d'autres fichiers
module.exports = { sendNotification };