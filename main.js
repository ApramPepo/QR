let qrCode = null;
let qrData = null;

function generateQR() {
    const url = document.getElementById('urlInput').value.trim();
    const qrpara = document.getElementById('qrcode');

    if (!url) {
        alert("Please enter Url or Text");
        return;
    }

    qrpara.innerText = "";
    qrCode = new QRCode(qrpara, {
        text: url,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    document.getElementById('download').style.display = 'inline-block';

}

function downloadQR() {
    const canvas = document.querySelector('#qrcode canvas');

    if (!canvas) {
        alert("No QR code to download");
        return;
    }
}