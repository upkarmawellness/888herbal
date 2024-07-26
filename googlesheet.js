const scriptURL = 'https://script.google.com/macros/s/AKfycby68E4kvMuDGTugBy3grw4GTqUSw0CYRDvger8fbyyj4Y4ruCVuld8ephr5M4lz-TL0/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})