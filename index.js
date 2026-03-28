const QRCode = require('qrcode');
const fs = require('fs');

const url = 'https://bright-axolotl-8dbf49.netlify.app/';
const outputFile = 'enlace_qr.png';

async function generarQR() {
  try {
    await QRCode.toFile(outputFile, url, {
      errorCorrectionLevel: 'H',
      margin: 2,
      scale: 8
    });
    console.log('✅ Código QR guardado en', outputFile);
  } catch (err) {
    console.error('Error generando QR:', err);
  }
}

generarQR();
         
