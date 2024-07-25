
/*------------------------ toggle icon navbar ------------------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*------------------------ Scroll Section Active Link ------------------------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
        };
    });
/*------------------------ Sticky navbar ------------------------*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

/*------------------------ remove toggle icon and navbar when click navbar link (scroll) ------------------------*/
 /*menuIcon.classList.toggle('bx-x');
 navbar.classList.toggle('active');*/

};

/*------------------------ Skill Section ------------------------*/
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0; i<dots; i++){
        points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})

/*------------------------ Mixitup Section ------------------------*/

var mixer = mixitup('.projects-gallery');


 /*------------------------ Scroll reveal ------------------------*/
 ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .main-text, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .proj-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

 /*------------------------ typed js ------------------------*/

 const typed = new Typed('.multiple-text', {
    strings:['Frontend Developer', 'Wordpress Developer','Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

 })

/*------------------------ Contact Email ------------------------*/

const form = document.querySelector('form');
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullname.value}<br>
    Email: ${email.value}<br> Phone Number: ${phone.value}<br>
    Message: ${mess.value}`;
    
    Email.send({
       SecureToken: "fde99fd3-4f54-4f0c-b413-187b07b26ba7",
       To : 'praveenkumarfinix@gmail.com',
       From : "praveenkumarfinix@gmail.com",
       Subject : subject.value,
       Body : bodyMessage
    }).then(
       message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
          });
        }
       }
    );
}
/*------------------------ check input ------------------------*/
function checkInputs(){
    const items = document.querySelectorAll(".item");

    for (const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        
        if (items[1].value !=""){
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail(){
     const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
     const errortextEmail = document.querySelector(".error-text.email");
     if(!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errortextEmail.innerText = "Enter a valid email address";
        }
        else {
            errortextEmail.innerText = "Email Address can't be blank";
        }
     }
     else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
     }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!fullname.classList.contains("error") && !email.classList.contains("error") &&
    !phone.classList.contains("error") && !subject.classList.contains("error") &&
    !mess.classList.contains("error") ){
        sendEmail();

        form.reset();
        return false;
    }
});