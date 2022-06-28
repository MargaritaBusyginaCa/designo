import React, {useState, useRef} from "react";
import "../styles/contact.css"
import Countries from "./heroes/Countries";
import Footer from "./heroes/Footer";
function Contact(){
  const [nameError, setNameError] = useState("")  
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [messageError, setMessageError] = useState("")
  const alertRef = useRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const messageRef = useRef()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  })
  const imgBg = require("../assets/contact/desktop/bg-pattern-hero-desktop.svg").default
  const divStyle ={
    backgroundImage: `url(${imgBg})`,
    backgroundPosition: 'bottom left',
    backgroundRepeat  : 'no-repeat'   
  }

function handleChange(event){
    const {name, value} = event.target
    event.preventDefault()
    setFormData(prevState => ({...prevState, [name]:value}))
}
function validateName(){
    //check name
    if(!formData.name){
        nameRef.current.className = "error"
        setNameError("Name can't be empty")
        return false
    }else if(formData.name.length <=1){
        nameRef.current.className = "error"
        setNameError("Name should at least have 2 letters")
        return false
    }else if(/\d/.test(formData.name )){
        nameRef.current.className = "error"
        setNameError("Name can't have numbers")
        return false
    }else{
        nameRef.current.className = "error-hide"
        return true
    }
}
function validateEmail(){
  var emailRe =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //check email
  if(!formData.email.match(emailRe)){
     emailRef.current.className = "error"
     setEmailError("Invalid email")
     return false
  }else{
     emailRef.current.className = "error-hide"
     return true
  }
}
function validatePhone(){
    var phoneRe = /[a-z]/
   //check phone
  if(!formData.phone){
    phoneRef.current.className = "error"
    setPhoneError("Phone number can't be empty")
    return false
  }else if(formData.phone.match(phoneRe)){
    phoneRef.current.className = "error"
    setPhoneError("Phone number can't have letters") 
    return false
  }else if(formData.phone.length > 14){
     phoneRef.current.className = "error"
     setPhoneError("Phone number is too long") 
     return false
  }else{
     phoneRef.current.className = "error-hide"
     return true
  }  
}
function validateMessage(){
    if(!formData.message){
        messageRef.current.className = "error"
        setMessageError("Your message can't be empty")
        return false
     }else if(formData.message.length < 10){
         messageRef.current.className = "error"
         setMessageError("Your message is too short") 
         return false
     }else{
         messageRef.current.className = "error-hide"
         return true
     }
}

function submitForm(){
   if(validateName() && validateEmail() && validatePhone() && validateMessage()){
    alertRef.current.className = ""
   }else{
    alertRef.current.className = "error-hide"
   }
}
  return(
  <div className="contact-parent">
   <div className="narrow-container">
    <div className="contact-main" style={divStyle}>
      <div className="contact-text">
       <h1>Contact Us</h1>
       <p>Ready to take it to the next level? 
        Let's talk about your project or idea and find out how we can 
        help your business grow. If you are looking for unique digital 
        experiences that's relatable to your users, drop us a line.</p>
      </div>
     <div className="contact-form">
     <form>
      <input type="text" name="name"  placeholder="Name" value={formData.name} onChange={handleChange}/>
      <div className="error-hide" ref={nameRef}>
        <img src={require("../assets/contact/desktop/warning.png").default}/>
        <p>{nameError}</p>
      </div>
      
      <input type="email" name="email"  placeholder="Email Address" value={formData.email} onChange={handleChange}/>
      <div className="error-hide" ref={emailRef}>
        <img src={require("../assets/contact/desktop/warning.png").default}/>
        <p>{emailError}</p>
      </div>

      <input type="text" name="phone"  placeholder="Phone" value={formData.phone} onChange={handleChange}/>
      <div className="error-hide" ref={phoneRef}>
        <img src={require("../assets/contact/desktop/warning.png").default}/>
        <p>{phoneError}</p>
      </div>

      <textarea name="message"  placeholder="Your message" value={formData.message} onChange={handleChange}/>
      <div className="error-hide" ref={messageRef}>
        <img src={require("../assets/contact/desktop/warning.png").default}/>
        <p>{messageError}</p>
      </div>

      <div className="btn">
        <p className="error-hide" ref={alertRef}>Your message was sent successfully</p>
        <button type="button" className="submit-btn" onClick={submitForm}>Submit</button>
    </div>
    </form>
    </div>
   </div>

  <Countries/>
  </div>{/**End of narrow container */}
  <Footer />
 </div>

)}
export default Contact