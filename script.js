function showAlert(){
alert('SOS Alert Activated! (Demo Version)');
}
function saveContact(){
let contact=document.getElementById('contact').value;
localStorage.setItem('emergencyContact',contact);
document.getElementById('msg').innerText='Contact Saved Successfully';
}
