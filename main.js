console.log("Soy el script :)");

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "61002176@alumnos.innovaschools.edu.pe",
    Password: "gtcqifzcvdjifsbv",
    To: "61002176@alumnos.innovaschools.edu.pe",
    From: "61002176@alumnos.innovaschools.edu.pe",
    Subject: "JobHunt trabajo",
    Body: "Hello",
  }).then((message) => alert("mail sent successfully"));
}

const date = document.querySelector("#fecha");

const nombre = document.querySelector("#nombres").textContent;

const age = document.querySelector("#años").textContent;

const email = document.querySelector("#email").textContent;

const lastNames = document.querySelector("#apellidos").textContent;

const gender = document.querySelector("#genero").value;

const questionOne = document.querySelector("#pregunta-1").textContent;

const questionTwo = document.querySelector("#pregunta-2").textContent;

const questionThree = document.querySelector("#pregunta-3").textContent;

const personalInfo = () => {
  console.log(
    date,
    nombre,
    age,
    email,
    lastNames,
    gender,
    questionOne,
    questionTwo,
    questionThree
  );
};

const button = document.querySelector("#envio");
button.addEventListener("click", personalInfo);
