//====================================MAIL STUFF ==========================================


//var nodemailer = require('nodemailer');
require('dotenv').config({silent: true});
var helper = require('sendgrid').mail;
var sg = require('sendgrid')("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");
//var router = express.Router();
//app.use('/sayHello', router);
//router.post('/', handleSayHello); 
// handle the route at yourdomain.com/sayHello
//===========================================================================

//===========================================================================

module.exports = {
  setEmail: function (userred,nombre,apellido,username,celular,tipo_usuario,indicador) {
    var text;
    if(indicador==1){
      
     text ="Nombre:,"+nombre+" "+apellido+"<br/>Usuario de red:,"+userred+"<br/>Correo:,"+username+"<br/>Celular:,"+celular+"<br/>Tipo Usuario:,"+tipo_usuario;  
     
    }else if(indicador==0){
       
      text ="Nombre:,"+nombre+" "+apellido+"<br/>Usuario de red:,"+userred+"<br/>Correo:,"+username+"<br/>Celular:,"+celular+"<br/>Tipo Usuario:,"+tipo_usuario;  
      
    }else if(indicador==2){
      text ="¿Mabechat le ayudó a atender rápidamente su solicitud?:,"+arraySurvey[1]+"<br/>¿El tiempo en la atención vía Chat del Ticket fue aceptable?:,"+arraySurvey[2]+" <br/>¿La información proporcionada por el chat fue clara?:,"+arraySurvey[3]+"<br/>¿La solución cubrió sus expectativas?:,"+arraySurvey[4]+"<br/>¿Se le mantuvo al tanto del estatus de su ticket?:,"+arraySurvey[5]+"<br/>¿Fue aceptable la calidad del soporte que recibio?:,"+arraySurvey[6];  
    }

    console.log("que vale text: "+text);
  /*var text = "";// = 'RES SEC QUESTION 1:  ' + ' IONE \n\n'+'RES SEC QUESTION 2:  ' + ' TWOO \n\n'+'RES SEC QUESTION 3:  ' + ' ANS3 \n\n';
  for (var i = 0; i<responsesArray.length ; i++) {
  	text = text + 'RES SEC QUESTION '+(i+1)+": "+ responsesArray[i] +'\n\n'
  	//console.log('text caoncat: '+text);
  }*/
  // service.desk@mabe.com.mx; j.zamora.villasenor@accenture.com; 
if(indicador==0){//Manda a llamar mabe invitado
console.log("Reseteo send email");
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: {
    personalizations: [
      {
        to: [
          {
            
            email: 'Service Desk Posadas<accrobotics@gmail.com>',
          },
        ],
        subject:"Reseteo",
      },
    ],
    from: {
      email:'j.zamora.villasenor@accenture.com',
    },
    content: [
      {
        type: 'text/html',
        value:"Bot:,Reseteo<br/>"+text,
      },
    ],
  },
});

//With callback
sg.API(request, function(error, response) {
  if (error) {
    console.log('Error response received');
  }
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);

});
   
}else if(indicador==1){
 
  console.log("desbloqueo send email");
  var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: {
    personalizations: [
      {
        to: [
          {
            email: 'Service Desk Posadas<accrobotics@gmail.com>',
          },
        ],
        subject:"Desbloqueo",
      },
    ],
    from: {
      email:'j.zamora.villasenor@accenture.com',
    },
    content: [
      {
        type: 'text/html',
        value:"Bot:,Desbloqueo<br/>"+text,
      },
    ],
  },
});

//With callback
sg.API(request, function(error, response) {
  if (error) {
    console.log('Error response received');
  }
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);

});

  }else if(indicador==2){
    console.log("encuesta send email");
  var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: {
    personalizations: [
      {
        to: [
          {
            email: 'Service Desk Mabe<accrobotics@gmail.com>',
          },
        ],
        subject:"Encuesta de usuario de red",
      },
    ],
    from: {
      email:'j.zamora.villasenor@accenture.com',
    },
    content: [
      {
        type: 'text/html',
        value:"Bot:,Encuesta<br/>"+text,
      },
    ],
  },
});

//With callback
sg.API(request, function(error, response) {
  if (error) {
    console.log('Error response received');
  }
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);

});
  }
}
};


