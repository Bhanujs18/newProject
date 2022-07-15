import { Typography  } from "@mui/material";
import React, { useState ,useRef , useEffect} from "react";
import emailjs from '@emailjs/browser';



const Chat = () => {
  const [userdata, setUserdata] = useState(false);


const callchatpage = async() => {
    try { 
         const res = await fetch('/chat', {
         method:"GET",
          header:{
        "Content-Type": "application/json"
         },
        
        },);
        const data = await res.json()
        setUserdata(data);
        if(!res.status === 401){
         window.alert('error here')
        }
      }
      catch (error) {
         window.alert('error catch')
        }
      }

      useEffect(() => {
        callchatpage();
      },);
      
      const form = useRef();
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z83wjzk', 'template_xmk7zm6', form.current, 'IdxkysMK1LwB52jll')
          .then((result) => {
              window.alert("Sent");
              console.log(result)
          }, (error) => {
            window.alert("failed");
            console.log(error)
          });
          e.target.reset();
      };
  
  return (
    <form method="GET" ref={form} onSubmit={sendEmail} >
      <Typography>
      <div className='contactusDiv'>

        <div className="contactbox">
      <div className="formdiv">
        <div className='getintouch'>
          <h2>Get In Touch</h2>
        </div>
       <div className='contactus'>     
        <input type="text" id="name" name="name" className="inputContact" placeholder="Name" value={userdata.name} required />
       </div>
      <div className="contactus">
        
        <input type="email" id="email"  name="email" className="inputContact" placeholder="Email" value={userdata.email} required />
      </div>
      <div className="contactus">
        
        <input type="phone" id="phone" name="phone" className="inputContact" placeholder="Phone" value={userdata.phone} required />
      </div>
      <div className="contactus">
      
        <textarea id="message" name="message" className="inputContact" placeholder="Message" value={userdata.message} required />
      </div>
      <div className="contactbutton">
      <button  type="submit"><Typography>Submit</Typography></button>
      </div>
      </div>




     
      <img alt="img" className="contactimg" src="https://www.travelyourwaydirect.com/oshutoon/2022/03/contact-us.png" />
      </div>
      </div>
        
      </Typography>
    </form>
  );
};

export default Chat;