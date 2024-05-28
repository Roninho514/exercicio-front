const container = document.querySelector('.container');
const qrCodeButton = document.querySelector('#qr-form button');
const urlInput = document.querySelector('#qr-form input');
const qrCodeImg = document.querySelector('#qr-code img');

function generateQrCode(){
    if (!urlInput.value) return;
    const urlInputText  = urlInput.value;
    qrCodeButton.innerText = "Gerando QR Code...";
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${urlInputText}`;
    qrCodeImg.addEventListener("load", () =>{
        container.classList.add('active');
        qrCodeButton.innerText = "Código criado!";
    });
}

qrCodeButton.addEventListener("click", () =>{
    generateQrCode();
})

urlInput.addEventListener("keydown", (e) =>{
    if(e.code === "Enter"){
        generateQrCode();
    }
});

urlInput.addEventListener("keyup", (e) =>{
    if(!urlInput.value){
        container.classList.remove('active');
        qrCodeButton.innerText = "Gerar QR Code";
    }
});