const HOST = 'localhost';
const PORT = '3000';
const URL = `http://${HOST}:${PORT}`;

const infoAdministrador = JSON.parse(localStorage.getItem('usuario-actual')).usuario;

function loadMotoristsInfo(){
    document.getElementById('main-view').innerHTML = `
    <div class="section motorists-section">
        <div id="requests">
            <h2>Solicitudes</h2>
        </div>
        <div id="orders">
            <h2>Pedidos</h2>
        </div>
    </div>
    `

    fetch(`${URL}/administrador/solicitudes`)
    .then((result) => result.json())
    .then((response) => {
      response.forEach((element) => {
        const jobApplicationDiv = document.createElement('div');
        jobApplicationDiv.className = 'job-application';
  
        const applicantNameDiv = document.createElement('div');
        applicantNameDiv.className = 'applicant-name';
        applicantNameDiv.textContent = `${element.nombreCompleto} acaba de enviar una solicitud de trabajo.`;
  
        const ageDiv = document.createElement('div');
        ageDiv.textContent = `Edad: ${element.edad}`;
  
        const passwordDiv = document.createElement('div');
        passwordDiv.textContent = `Contraseña: ${element.contrasena}`;
  
        const experienceDiv = document.createElement('div');
        experienceDiv.className = 'applicant-experience';
        experienceDiv.textContent = `Experiencia: ${element.experiencia}`;
  
        const emailDiv = document.createElement('div');
        emailDiv.className = 'applicant-email';
        emailDiv.textContent = `Correo: ${element.correo}`;
  
        const buttonContainerDiv = document.createElement('div');
        buttonContainerDiv.className = 'button-container2';
  
        const acceptButton = document.createElement('button');
        acceptButton.className = 'action-button accept-button';
        acceptButton.textContent = 'Aceptar';
        acceptButton.addEventListener('click', () => handleAccept(element)); // Define la función handleAccept
  
        const rejectButton = document.createElement('button');
        rejectButton.className = 'action-button reject-button';
        rejectButton.textContent = 'Rechazar';
        rejectButton.addEventListener('click', () => handleReject(element)); // Define la función handleReject
  
        buttonContainerDiv.appendChild(acceptButton);
        buttonContainerDiv.appendChild(rejectButton);
  
        jobApplicationDiv.appendChild(applicantNameDiv);
        jobApplicationDiv.appendChild(ageDiv);
        jobApplicationDiv.appendChild(passwordDiv);
        jobApplicationDiv.appendChild(experienceDiv);
        jobApplicationDiv.appendChild(emailDiv);
        jobApplicationDiv.appendChild(buttonContainerDiv);
  
        document.getElementById('requests').appendChild(jobApplicationDiv);
      });
    });
};

function handleAccept(applicant) {
    // Aquí puedes implementar la lógica para aceptar al aplicante
    fetch(`${URL}/administrador/solicitudes/aceptar-solicitud`, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(applicant)
    })
    .then((result)=>result.json())
    .then((response)=>{
        console.log(response);
    })
};
  
  function handleReject(applicant) {
    // Aquí puedes implementar la lógica para rechazar al aplicante
    console.log('Aplicante rechazado:', applicant);
  }

function loadEnterprisesInfo(){
    document.getElementById('main-view').innerHTML = `
    <div class="section companies-section">
            <h2>Empresas</h2>
            
    </div>
    `
};