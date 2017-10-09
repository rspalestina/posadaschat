//====================================MAIL STUFF ==========================================


//var nodemailer = require('nodemailer');
var helper = require('sendgrid').mail;
var sg = require('sendgrid')("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");
var fs=require('fs');

module.exports = {
  setSurvey: function(arraySurvey,indicador){
   var text;
   if(indicador==2){
      text ="¿Mabechat le ayudó a atender rápidamente su solicitud?:,"+arraySurvey[1]+"<br/>¿El tiempo en la atención vía Chat del Ticket fue aceptable?:,"+arraySurvey[2]+" <br/>¿La información proporcionada por el chat fue clara?:,"+arraySurvey[3]+"<br/>¿La solución cubrió sus expectativas?:,"+arraySurvey[4]+"<br/>¿Se le mantuvo al tanto del estatus de su ticket?:,"+arraySurvey[5]+"<br/>¿Fue aceptable la calidad del soporte que recibio?:,"+arraySurvey[6];  
    }
   if(indicador==2){
    console.log("encuesta send email");
  var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: {
    personalizations: [
      {
        to: [
          {
            email: 'Service Desk Mabe<accenturerobotics@gmail.com>',
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


