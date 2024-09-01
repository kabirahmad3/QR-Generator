function generateQRCode() {
    const text = document.getElementById('text').value;
    const qrCodeContainer = document.getElementById('qrcode');
    
    qrCodeContainer.innerHTML = '';  // Clear previous QR code

    if (text.trim() !== '') {
        new QRCode(qrCodeContainer, {
            text: text,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
        });
    } else {
        alert('Please enter a text or URL.');
    }
}
