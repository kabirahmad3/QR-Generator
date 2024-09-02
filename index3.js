document.getElementById('gb').addEventListener('click', function() {
    const text = document.getElementById('text').value;
    const qrCodeContainer = document.getElementById('qrcode');
    
    qrCodeContainer.innerHTML = '';  // Clear previous QR code

    if (text.trim() !== '') {
        new QRCode(qrCodeContainer, {
            text: text,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",})
            document.getElementById('db').style.display = 'block';
    }else {
        alert("Please enter some text or URL");
    }
});

document.getElementById('db').addEventListener('click', function() {
    const canvas = document.querySelector('#qrcode canvas');
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'qrcode.png';
    link.click();
});
