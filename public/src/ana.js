"use strict";

// Variables for chat and stored context specific events
var params = {}; // Object for parameters sent to the Watson Conversation service
var watson = 'Ana';
var user = '';
var text = '';
var context;

/**
 * @summary Enter Keyboard Event.
 *
 * When a user presses enter in the chat input window it triggers the service interactions.
 *
 * @function newEvent
 * @param {Object} e - Information about the keyboard event.
 */

function newEvent(e) {
    // Only check for a return/enter press - Event 13
    if (e.which === 13 || e.keyCode === 13) {

        var userInput = document.getElementById('chatMessage');
        text = userInput.value.toUpperCase(); // Using text as a recurring variable through functions
        text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters

        // If there is any input then check if this is a claim step
        // Some claim steps are handled in newEvent and others are handled in userMessage
        if (text) {

            // Display the user's text in the chat box and null out input box
            displayMessage(text, user);
            userInput.value = '';

            userMessage(text);

        } else {

            // Blank user message. Do nothing.
            console.error("No message.");
            userInput.value = '';

            return false;
        }
    }
}
//Envio de mensaje a panel del boton de envio
function enviaPanel(){
     var userInput = document.getElementById('chatMessage');
        text = userInput.value.toUpperCase(); // Using text as a recurring variable through functions
        text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters
        displayMessage(text, user);
        userMessage(text);
        userInput.value = '';
}
//se abre modal para envio de encuesta
var modal = document.getElementById('myModal');
var btn = document.getElementById("btnCollapseOne");
var span = document.getElementsByClassName("close")[0];
var btnFalse = false;

/* btn.onclick = function() {
      modal.style.display = "block";
       
    }
span.onclick = function() {
    modal.style.display = "none";

}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "block";
    }
}*/
function mabeInvitado(){
 text="Mabe invitado";
 text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters
        displayMessage(text, user);
        userMessage(text);
}
function desbloqueo(){
 text="desbloqueo";
text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters
        displayMessage(text, user);
        userMessage(text);
}
function reseteo(){
   text="reseteo";
  text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters
        displayMessage(text, user);
        userMessage(text);
}
function resNo(){
  text="no" 
    text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters
        displayMessage(text, user);
        userMessage(text);
  if( document.getElementById("categoria1")!=null&& document.getElementById("categoria2")!=null&&document.getElementById("categoria3")!=null && document.getElementById("categoria4")!=null&&document.getElementById("categoria7")!=null){
      document.getElementById("categoria1").disabled = true;
      document.getElementById("categoria2").disabled = true;
      document.getElementById("categoria3").disabled = true;
      document.getElementById("categoria4").disabled = true;
      document.getElementById("categoria7").disabled = true;
  }
  
  if(document.getElementById("btnYes")!=null&&document.getElementById("btnNo"!=null)&&document.getElementById("textInput")!=null){
     document.getElementById("textInput").disabled = true;
    document.getElementById("btnYes").disabled = true;
    document.getElementById("btnNo").disabled = true;
  }
  if(document.getElementById("selectid")!=null){
    document.getElementById("selectid").disabled = true;
  }
   
     setTimeout(function() {
      location.reload();
    },1000);
}
function adiosYes(){
 text='si' 
 text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters
        displayMessage(text, user);
        userMessage(text);
}
function rsYes(){
  text='si' 
 text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters
        displayMessage(text, user);
        userMessage(text);
  setTimeout(function() {
      location.reload();
    },500);
}
function adiosNo(){
  
 text='No' 
 text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters
        displayMessage(text, user);
        userMessage(text);
if(document.getElementById("btnUsYes")!=null&&document.getElementById("btnUsNo")!=null&&document.getElementById("textInput")!=null&&document.getElementById("btnNoAdios")!=null&&document.getElementById("btnYesAdios")!=null){
     document.getElementById("btnUsYes").disabled = true;
      document.getElementById("btnUsNo").disabled = true;
      document.getElementById("textInput").disabled = true;
      document.getElementById("btnNoAdios").disabled = true;
      document.getElementById("btnYesAdios").disabled = true;
}
   
}
function reloadApp(){
      location.reload();
}
function resYes(){
  
 text="si" 
 text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters
        displayMessage(text, user);
        userMessage(text);
}
function confirmNo(){
  text="no" 
  text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters
        displayMessage(text, user);
        userMessage(text);

}
function confirmYes(){
  text="si" 
  text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters
        displayMessage(text, user);
        userMessage(text);

}
function formatos(){
  
  text='Formatos';
   displayMessage(text, user);
        userMessage(text);
}
function categoria1(){
  
  text="Comunicacion Personal";
   displayMessage(text, user);
        userMessage(text);
}
function categoria2(){
  
  text="Equipo de Computo";
   displayMessage(text, user);
        userMessage(text);
}
function categori3(){
  
  text="Accesorios";
   displayMessage(text, user);
        userMessage(text);
}
function categoria4(){
  
  text="MabenetRegion";
   displayMessage(text, user);
        userMessage(text);
}
function categoria7(){
 
  text="SAPSatelites";
   displayMessage(text, user);
        userMessage(text);
}
function dirShare(){
  
    text='carpetas compartidas';
   displayMessage(text, user);
        userMessage(text);
}
function buzonCorreo(){
  
  text='aumento de correo';
   displayMessage(text, user);
        userMessage(text);
}
function respEnviada(){
    alert("Gracias por el tiempo en contestar la Encuesta de Satisfacción. Que pase un excelente día");
    location.reload();
  }
  function selectLocalidad(){
   var x = document.getElementById('cboLocalidad').value;
   text=x;
    displayMessage(text, user);
        userMessage(text);
}
function changeSelect() {
    var x = document.getElementById('selectid').value;
    text=x;
     displayMessage(text, user);
        userMessage(text);
}
function respEnviada(){
  
    alert("Gracias por el tiempo en contestar la Encuesta de Satisfacción. Que pase un excelente día");
    location.reload();
  }
function value5() {
  
  text='Muy Satisfactorio';
  displayMessage(text,user);
  userMessage(text);
}
 function  value4(){
  
  text='Satisfactorio';
  displayMessage(text,user);
  userMessage(text);
 }

function value3() {
  
  text='Neutral';
  displayMessage(text,user);
  userMessage(text);
}
function  value2(){
  
  text='Insatisfactorio';
  displayMessage(text,user);
  userMessage(text);
}
function  value1(){
  
  text='Muy Insatisfactorio';
  displayMessage(text,user);
  userMessage(text);
}
function adios(){
   text='Adios';
  displayMessage(text,user);
  userMessage(text);
}
function reloadApp(){
      location.reload();
}
function extravioCel(){
  text='extravio de celular';
  displayMessage(text,user);
   userMessage(text);
}
function roboCel(){
  text='celular robado';
  displayMessage(text,user);
   userMessage(text);
}
function extravioPC(){
  text='extravio de laptop';
  displayMessage(text,user);
   userMessage(text);
}
function roboPC(){
  text='laptop robada';
  displayMessage(text,user);
   userMessage(text);
}

//Seleccion  de  idioma 

function enviaPanelMex(){
  text='español';
   displayMessage(text,user);
   userMessage(text);
}
function enviaPanelUs(){
  text='english';
  displayMessage(text,user);
    userMessage(text);
}
//metodos para seleccion de ingles
function confirmYesEn(){
   text="yes" 
  text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters
        displayMessage(text, user);
        userMessage(text);

}
function confirmNoEn(){
   text="no" 
  text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters
        displayMessage(text, user);
        userMessage(text);
 
}
function resYesEn(){
   text="yes" 
  text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters
        displayMessage(text, user);
        userMessage(text);
}
function bye(){
   text='bye';
  displayMessage(text,user);
  userMessage(text);
}

 function unlock(){
   text='unlock';
  displayMessage(text,user);
  userMessage(text);
 }

function formats(){
  text='Formats';
  displayMessage(text,user);
  userMessage(text);
}
function shereFolder(){
  text='Share Folder';
  displayMessage(text,user);
  userMessage(text);
}
function upEmail(){
  text='Increase Email';
  displayMessage(text,user);
  userMessage(text);
}
function value5en(){
  text=' Very Satisfying';
  displayMessage(text,user);
  userMessage(text);
}
function value4en(){
  text='Satisfactory';
  displayMessage(text,user);
  userMessage(text);
}
function value3en(){
  text='Neutral';
  displayMessage(text,user);
  userMessage(text);
}
function value2en(){
  text='Unsatisfactory';
  displayMessage(text,user);
  userMessage(text);
}
function value1en(){
  text='Very Unsatisfactory';
  displayMessage(text,user);
  userMessage(text);
}

/**
 * @summary Main User Interaction with Service.
 *
 * Primary function for parsing the conversation context  object, updating the list of
 * variables available to Ana, handling when a conversation thread ends and resetting the
 * context, and kicking off log generation.
 *
 * @function userMessage
 * @param {String} message - Input message from user or page load.
 */
function userMessage(message) {

    // Set parameters for payload to Watson Conversation
    params.text = message; // User defined text to be sent to service
    params.user_time = new Date();
    if (context) {
        params.context = context;
    }

    var xhr = new XMLHttpRequest();
    var uri = '/api/ana';

    xhr.open('POST', uri, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {

        // Verify if there is a success code response and some text was sent
        if (xhr.status === 200 && xhr.responseText) {

            var response = JSON.parse(xhr.responseText);
            text = response.output.text; // Only display the first response
            context = response.context; // Store the context for next round of questions

            console.log("Got response from Ana: ", JSON.stringify(response));

            displayMessage(text, watson);

        } else {
            console.error('Server error for Conversation. Return status of: ', xhr.statusText);
            displayMessage("I ran into an error. Could you please try again.", watson);
        }
    };

    xhr.onerror = function() {
        console.error('Network error trying to send message!');
        displayMessage("I can't reach my brain right now. Try again in a few minutes.", watson);
    };

    console.log(JSON.stringify(params));
    xhr.send(JSON.stringify(params));
}

function getTimestamp() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
/**
 * @summary Display Chat Bubble.
 *
 * Formats the chat bubble element based on if the message is from the user or from Ana.
 *
 * @function displayMessage
 * @param {String} text - Text to be dispalyed in chat box.
 * @param {String} user - Denotes if the message is from Ana or the user.
 * @return null
 */
function displayMessage(text, user) {

    var chat = document.getElementById('chatBox');
    var bubble = document.createElement('div');
     var spaceUser="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
     var space="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    bubble.className = 'message'; // Wrap the text first in a message class for common formatting

    // Set chat bubble color and position based on the user parameter
    if (user === watson) {
      var name = "Service Desk";
     
      bubble.innerHTML = "<hr/><div class='anaPane'><div class='row'><div class='anaImage'></div>"+"<div class='anaTitle'><a style='color:#000;font-weight:bold'>" + name + "</a>"+space+ "<span class='icon'><img src='images/clock.png' style='width:10px;height:10px;'></img></span>"+getTimestamp() + "</div></div><div class='ana'>" + text + "</div></div>";
    } else {
        var name = "Usuario";
        if(context && context.fname && context.fname.length > 0){
          name = context.fname;
        }
        console.log("context.fname "+context.fname)
        bubble.innerHTML = "<hr/><div class='row'><div class='userImage'></div><div class='userTitle'>" + "<span class='icon'><img src='images/clock.png' style='width:10px;height:10px;'></img></span>"+getTimestamp() + spaceUser+"<a style='color:#000;font-weight:bold'>" + name + "</a></div>"+"</div>"+"<div class='user'>" + text + "</div>";
    }

    chat.appendChild(bubble);
    chat.scrollTop = chat.scrollHeight; // Move chat down to the last message displayed
    document.getElementById('chatMessage').focus();
}
