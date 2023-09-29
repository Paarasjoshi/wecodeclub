const config = {
    apiKey: "AIzaSyCZ6Rj0wLU_0t38nYxw2f-isEK9X-UsLbk",
    authDomain: "wecode-95461.firebaseapp.com",
    databaseURL: "https://wecode-95461-default-rtdb.firebaseio.com",
    projectId: "wecode-95461",
    storageBucket: "wecode-95461.appspot.com",
    messagingSenderId: "1076265888756",
    appId: "1:1076265888756:web:46d23c670fea40b50a27a1",
    measurementId: "G-NWG5B06S5L"
  };
  firebase.initializeApp(config);
  
  //Reference for form collection(3)
  let formMessage = firebase.database().ref('Student Contact Us');
  
  //listen for submit event//(1)
  document
    .getElementById('contact')
    .addEventListener('submit', formSubmit);
  
  //Submit form(1.2)
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let msg = document.querySelector('#msg').value;
   
  
    //send message values
    sendMessage(name, email,msg);
  
    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';
  
    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);
  
    //Form Reset After Submission(7)
    document.getElementById('contact').reset();
  }
  
  //Send Message to Firebase(4)
  
  function sendMessage(name, email,msg) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      Name: name,
      Email: email,
      Message:msg

    });
  }