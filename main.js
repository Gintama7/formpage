const form = document.querySelector('form');
let nameInput = document.querySelector('[name="fullname"]');
let emailInput = document.querySelector('[name="email"]');
let phoneInput = document.querySelector('[name="phone"]');
let dateInput = document.querySelector('[name="date"]');
let timeInput = document.querySelector('[name="time"]');

form.addEventListener('submit',function(e){   
        e.preventDefault();        
        form.classList.add('was-validated');
        localStorage.setItem('name',nameInput.value);
        localStorage.setItem('email',emailInput.value);
        localStorage.setItem('phone',phoneInput.value);
        localStorage.setItem('date',dateInput.value);
        localStorage.setItem('time',timeInput.value);      
})

