const form = document.querySelector('form');
let nameInput = document.querySelector('[name="fullname"]');
let emailInput = document.querySelector('[name="email"]');
let phoneInput = document.querySelector('[name="phone"]');
let dateInput = document.querySelector('[name="date"]');
let timeInput = document.querySelector('[name="time"]');

form.addEventListener('submit',function(e){   
        e.preventDefault();        
        form.classList.add('was-validated');
        let user1 = {
            name:nameInput.value,
            email:emailInput.value,
            phone:phoneInput.value,
            date:dateInput.value,
            time:timeInput.value
        }
       let obj1 = JSON.stringify(user1);
       
       localStorage.setItem("user",obj1);
})

