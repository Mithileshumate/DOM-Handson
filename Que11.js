function formDetails() {
  
    var form = document.createElement('form');
    form.setAttribute('method','get');
    form.setAttribute('action','submit');


    var name = document.createElement('input');
    name.setAttribute('type','name');
    name.setAttribute('name','fullname');
    name.setAttribute('placeholder','fullname');
    document.write("<br>");
    document.write("<br>");

    var email = document.createElement('input');
    email.setAttribute('type','email');
    email.setAttribute('name','email');
    email.setAttribute('placeholder','email@prepbytes.com');
    document.write("<br>");
    document.write("<br>");

    var phoneno = document.createElement('input');
    phoneno.setAttribute('type','number');
    phoneno.setAttribute('name','phoneno');
    phoneno.setAttribute('placeholder','+91 - ');
    phoneno.setAttribute('maxlenght','10');
    document.write("<br>");
    document.write("<br>");

    var DOB = document.createElement('input');
    DOB.setAttribute('type','Date');
    DOB.setAttribute('name','DOB');
    DOB.setAttribute('placeholder','DD/MM/YYYY');
    DOB.setAttribute('min','1995');

    var submit = document.createElement('input');
    submit.setAttribute('type','submit');

    form.appendChild('name');
    document.write("<br>");

    form.appendChild('email');
    document.write("<br>");

    form.appendChild('phoneno');
    document.write("<br>");

    form.appendChild('DOB');
    document.write("<br>");

    form.appendChild('submit');
    document.write("<br>");
     
    document.getElementsByClassName('form')[0].appendChild(form);


}
formDetails();