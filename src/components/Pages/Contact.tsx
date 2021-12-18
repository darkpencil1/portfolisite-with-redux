import React, {useState } from 'react';
import Axios from 'axios';

type Props = {
  data: any
}
const SendButton = (props: Props) =>{

  const [isActive, setIsActive] = useState(false)

  function btnClick(){
      (isActive) ? setIsActive(false) : setIsActive(true)
      //Use localhost address for requests on local environment:
      //Axios.post("http://localhost:5000/api", props.data)
      Axios.post("/api", props.data)
      .then((res) => console.log(res))
      .catch((err)=> console.log(err))

    }
    return(
    isActive ?
        <div>
          <button className="btn btn-primary" id="send-btn" onClick={btnClick}>Send</button>
          <p style={{marginBottom: "0px", paddingBottom: "5px"}}>Your message has been sent. I will get back to you soon!</p>
        </div>
      :
        <button className="btn btn-primary" id="send-btn" onClick={btnClick}>Send</button>
        
    )
}

const Contact = () =>{

const [data, setData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  topic: '',
  message: '',
})

  return(
    <div className="text-center text-white bg-dark">
      <main className="px-3">
          <section className="text-container container-lg" id="intro-text">
              <p className="lead">Hello, thanks for visiting my portfolio site. You can leave me a message with the contact form below!</p>
          </section>
          <section className="py-lg-5 text-left container input-container">
              <h3>Contact form</h3>
                <div className="input-group-md mb-3 ">
                  <span className="input-group-text">First and last name</span>
                  <input type="text" aria-label="First name" placeholder = "First name" className="form-control" onChange={(e)=>setData({...data, firstName: e.target.value})}></input>
                  <input type="text" aria-label="Last name" placeholder = "Last name" className="form-control" onChange={(e)=>setData({...data, lastName: e.target.value})}></input>
                </div>
                
                <div className="input-group-md mb-3">
                  <span className="input-group-text" id="basic-addon2">Email</span>
                  <input type="text" className="form-control" aria-label="email" aria-describedby="basic-addon2" onChange={(e)=>setData({...data, email: e.target.value})}/>
                  
                </div>

                <div className="input-group-md mb-3">
                  <span className="input-group-text" id="basic-addon3">Topic</span>
                  <select className="form-select topic-select" id="topicSelect01" defaultValue={0} onChange={(e)=>setData({...data, topic: e.target.options[e.target.selectedIndex].text})}>
                      <option value="0">Choose...</option>
                      <option value="1">Interested in buying art</option>
                      <option value="2">Job opportunity</option>
                      <option value="3">Collaboration</option>
                      <option value="4">Feedback</option>
                      <option value="5">Other</option>
                    </select>
                
                </div>
 

                <div className="input-group-md mb-3 ">
                  <span className="input-group-text">Your message</span>
                  <textarea className="form-control" aria-label="your-message" onChange={(e)=>setData({...data, message: e.target.value})}></textarea>
                </div>
              <SendButton data= {data}/>
          </section>        
      </main>
    </div>
  )
}

export default Contact;

  