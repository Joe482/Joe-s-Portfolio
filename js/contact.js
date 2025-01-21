const form = document.querySelector('form');

const name = document.getElementById("name");
const mail = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){

    const bodyMessage = `Name: ${name.value}<br> Email: ${mail.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "antaniejoe@gmail.com",
        Password : "6C8E8E4772B400C4D94855C9FBBFD29180C9",
        To : 'antaniejoe@gmail.com',
        From : "antaniejoe@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Thank You!",
                text: "Message Sent",
                icon: "success"
              });
        }

      }
    );

}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
})