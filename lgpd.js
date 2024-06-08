
document.getElementById('contactForm').addEventListener('submit', function(event) {
    if (!document.getElementById('dataConsent').checked) {
        event.preventDefault();
        alert('Você deve concordar com a Política de Privacidade e o uso de dados conforme a LGPD.');
    }
});