let password = document.getElementById('password');
let slidervalue = document.getElementById('slidervalue');
let passwordlength = document.getElementById('length');
let uppercase = document.getElementById('Uppercase');
let lowercase = document.getElementById('Lowercase');
let Numbers = document.getElementById('Numbers');
let Special = document.getElementById('SpecialChar');
let copyicon = document.getElementById('copyicon');
passwordlength.addEventListener('input', () => {
  slidervalue.innerText = passwordlength.value;
});

let upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchar = "abcdefghijklmnopqrstuvwxyz";
let numbchar = "0123456789";
let specialchar = "!@#$%^&*()_";

function generatePassword() {
  let genpass = "";
  let allchar = "";

  if (lowercase.checked) allchar += lowerchar;
  if (uppercase.checked) allchar += upperchar;
  if (Numbers.checked) allchar += numbchar;
  if (Special.checked) allchar += specialchar;

  if (allchar.length === 0) {
    password.value = ""; // No character types selected
    return;
  }

  for (let i = 0; i < passwordlength.value; i++) {
    genpass += allchar.charAt(Math.floor(Math.random() * allchar.length));
  }

  password.value = genpass;
}
 
copyicon.addEventListener('click', ()=>{
    if(password.value !=="" || password.length>=1){
      navigator.clipboard.writeText(password.value);
      copyicon.innerText="check_circle";
            copyicon.title="Content Copied";

           setTimeout(()=>{
       copyicon.innerText="content_copy";
            copyicon.title="";
    },2000)
    }
})