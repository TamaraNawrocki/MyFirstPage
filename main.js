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

const personalInfo = () => {
  const date = document.querySelector("#fecha").value;

  const nombre = document.querySelector("#nombres").value;

  const age = document.querySelector("#años").value;

  const email = document.querySelector("#email").value;

  const lastNames = document.querySelector("#apellidos").value;

  const gender = document.querySelector("#genero").value;

  const questionOne = document.querySelector("#pregunta-1").textContent;

  const questionTwo = document.querySelector("#pregunta-2").textContent;

  const questionThree = document.querySelector("#pregunta-3").textContent;
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
  Email.send({
    Host: "smtp.gmail.com",
    Username: "61002176@alumnos.innovaschools.edu.pe",
    Password: "gtcqifzcvdjifsbv",
    To: "61002176@alumnos.innovaschools.edu.pe",
    From: "61002176@alumnos.innovaschools.edu.pe",
    Subject: "JobHunt trabajo",
    Body: `Fecha: ${date}
    \nNombres: ${nombre}
    \nAños: ${age}
    \nEmail: ${email}
    \nApellidos: ${lastNames}
    \nGénero: ${gender}
    \nPregunta1: ${questionOne}
    \nPregunta2: ${questionTwo}
    \nPregunta3: ${questionThree}`,
  }).then((message) => alert("mail sent successfully"));
};

const button = document.querySelector("#envio");
button.addEventListener("click", personalInfo);
