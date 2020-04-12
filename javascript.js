function login() {
	// body...
	var email=document.getElementById('emailuser').value;
    var password=document.getElementById('passworduser').value;
    if(email.length==0 && password.length==0)
    alert("Please enter email and password");
    else if(email.length==0)
    alert("Please enter email");
    else if(password.length==0)
    alert("Please enter password");
    else if(!email.includes('@') || !email.includes('.com'))
        alert("Please enter valid email");
    else
       window.open("booking.html");
	
}
function admin_login() {
    // body...
    
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    if(email.length==0 && password.length==0)
    alert("Please enter email and password");
    else if(email.length==0)
    alert("Please enter email");
    else if(password.length==0)
    alert("Please enter password");
    else if(!email.includes('@') || !email.includes('.com'))
        alert("Please enter valid email");
    else
        window.open("admin panel.html");
}
function register()
{   var email=document.getElementById('email').value;
    var mobile=document.getElementById('mobile').value;
    var name=document.getElementById('name').value;
    if(name.length==0)
        alert("Please enter valid name");
	else if(email.length==0 && mobile.length==0)
    alert("Please enter email and mobile");
    else if(email.length==0)
    alert("Please enter email");
    else if(mobile.length!=10)
    alert("Please enter valid mobile");
    else if(!email.includes('@') || !email.includes('.com'))
    	alert("Please enter valid email");
    else if(mobile.length!=10)
    	alert("Please enter valid mobile number");
    if(email.length!=0 && mobile.length==10 && email.includes('@') && email.includes('.com') && name.length!=0)
        alert("Registration Successful");


}
function add_admin()
{
    var email=document.getElementById('email').value;
    var firstname=document.getElementById('firstname').value;
    var mobile=document.getElementById('mobile').value;
    var lastname=document.getElementById('lastname').value;
    var password=document.getElementById('password').value;
    if(email.length==0 || mobile.length==0 ||password.length==0 || firstname.length==0 || lastname.length==0)
    alert("Please fill all the entries");
    else if(!email.includes('@') || !email.includes('.com'))
        alert("Please enter valid email");
    else if(mobile.length!=10)
        alert("Please enter valid mobile number");
        
    if(email.length!=0 && mobile.length==10 && password.length!=0 && firstname.length!=0 && lastname.length!=0 && email.includes('@') && email.includes('.com'))
    alert("Addition of Admin Successful");
    
}
function add_flight() {
    // body...
    var company=document.getElementById('company').value;
    var model=document.getElementById('model').value;
    var idno=document.getElementById('idno').value;
    var source=document.getElementById('source').value;
    var capacity=document.getElementById('capacity').value;
    if(company.length==0)
        alert("Please enter valid Company name");
    else if(model.length==0)
        alert("Please enter valid Model name");
    else if(idno.length==0)
        alert("Please enter valid Id number");
    else if(source.length==0)
        alert("Please enter valid Source name");
    else if(capacity.length==0) 
        alert("Please enter valid capacity");
    if(company.length!=0 && model.length!=0 && idno!=0 && source.length!=0 && capacity.length!=0)
        alert("Flight with Idno. "+idno+" added Successfully");


}
function modify_flight() {
    // body...
    var company=document.getElementById('company').value;
    var model=document.getElementById('model').value;
    var idno=document.getElementById('idno').value;
    var source=document.getElementById('source').value;
    var capacity=document.getElementById('capacity').value;
    if(idno.length==0)
        alert("Please enter valid Id number");
    else if(company.length==0)
        alert("Please enter valid company name");
    else if(model.length==0)
        alert("Please enter valid Model name");
    else if(source.length==0)
        alert("Please enter valid Source name");
    else if(capacity.length==0) 
        alert("Please enter valid capacity");
    if(company.length!=0 && model.length!=0 && idno!=0 && source.length!=0 && capacity.length!=0)
        alert("Flight with Idno. "+idno+" Modified Successfully");


}
function delete_flight() {
    // body...
    var idno=document.getElementById('idno').value;
    if(idno.length==0)
        alert("Please enter valid id");
    else
        alert("Flight with Id no. "+idno+" deleted Successfully");
}
function date() {
    // body...
    var f=0;
    var today=new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    }
    today=yyyy+'-'+dd+'-'+mm;
    var date=document.getElementById('calendar').value;
    var newdate=new Date(date);
    var dd2=newdate.getDate();
    var mm2=newdate.getMonth()+1;
    var yyyy2=newdate.getFullYear();
    if(dd2<10) 
    {
        dd2='0'+dd2;
    } 

    if(mm2<10) 
    {
        mm2='0'+mm2;
    }
    if(yyyy2<yyyy)
        f=1;
    else if(mm2<mm)
        f=1;
    else if(dd2<dd)
        f=1;
    if(f==1)
        alert("invalid date");

    

}
function source() {
    // body...
    var sour=document.getElementById('source').value;
    if(sour=="From")
        alert("Please Select Source location");
}
function destination() {
    // body...
    var dest=document.getElementById('to').value;
    if(dest=="Destination")
        alert("Please Select Destination");
}
function coach() {
    // body...
    var coach=document.getElementById('coach').value;
    if(coach=="Coach")
        alert("Please select coach type");
}
function book() {
    // body...
    var fn=document.getElementById('firstname').value;
    var ln=document.getElementById('lastname').value;
    var mob=document.getElementById('mobile').value;
    var age=document.getElementById('age').value;
    if(fn.length==0)
        alert("Please enter firstname");
    else if(ln.length==0)
        alert("Please enter lastname");
    else if(mob.length==0 || mob.length!=10)
        alert("Please enter valid mobile number");
    else if(age.length==0)
        alert("Please enter age");
    if(fn.length!=0 && mob.length==10 && ln.length!=0 && age.length!=0)
        window.open("payment.html");

    
}
function cancel() {
    // body...
    var idno=document.getElementById("idno").value;
    if(idno.length==0)
        alert("Please enter Cacellation id");
    else
        alert("Ticket with id no. "+idno+" cancelled Successfully");
}
function payment() {
    // body...
    var cn=document.getElementById('cardno').value;
    var cvv=document.getElementById('cvv').value;
    var name=document.getElementById('name').value;
    var date=document.getElementById('calendar2').value;
    if(cn.length!=12)
        alert("Enter valid card no.");
    else if(cvv.length!=3)
        alert("Enter valid CVV number");
    else if(name.length==0)
        alert("Please enter the name on the card");
    else if(date.length==0)
        alert("Please fill date")
    if(cn.length==12 && cvv.length==3 && name.length!=0 && date.length!=0)
        alert("Payment Successfull\nYour Booking Id is:"+Math.floor(Math.random() * 100000)+"\n Your Cacellation Id is:"+Math.floor(Math.random() * 100000));
        window.open("booking.html");
}
