import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
    AiFillCamera,
    AiFillContacts,
    AiFillInstagram,
  } from "react-icons/ai";
const Contact=()=>{
    return(
            <Base >
          
           
            <div className="  ">
          
              <br/>
              <br/>
              <br/>
            
            <Row  >
              
                
                <Col sm={{size:6,offset:3}} >
              
               
                <h1>Contact Us </h1>
               
             
                    <form>
                        <FormGroup>
                     <h3>Help is just a click away</h3>
           <p> RCall us anytime between 9am - 8pm </p>
            <b  >
                <aliFillMail/>
               <AiFillContacts/>  Contact us -8605090900   
               
            </b>
                        </FormGroup>

                      
                     
                    </form>
               

            
                </Col>
            </Row>
            

            
          
           </div>




            
            </Base>

    );

  
};
export default Contact