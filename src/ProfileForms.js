import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './ProfileManagement.css';
function ProfileForms(){
    const [selectedButton, setSelectedButton] = useState('');
    
  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  }
function Createform(){
    return(
            <div className="cform">
            <table>     
                <center><h2>Create user</h2></center>
                <br/>

                <tr>
                    <td style={{backgroundColor: "white"}}><input type="text" placeholder='Enter Username' style={{borderRadius:"6px"}}></input></td>
                </tr>

                <tr>
                    <td style={{backgroundColor: "white"}}><input type="text" placeholder='Enter Password' style={{borderRadius:"6px"}}></input></td>
                </tr>
                <br/>
                <tr>
                    <td  style={{textAlign:"center",backgroundColor:"white"}} colspan="2"><input type="submit" value="Create" style={{backgroundColor:"#0E8388",color:"white",width:"50%",borderRadius:"6px"}}></input></td>
                </tr>
            </table>
        </div>
    )
}
function Updateform(){
    return(
        <div className="cform">

        <table>
           <center> <h2>Update user</h2></center>
           <br/>
            <tr>
                <td style={{backgroundColor: "white"}}><input type="text" placeholder='Enter Password' style={{borderRadius:"6px"}}></input></td>
            </tr>
            <br/>
            <tr>
                <td  style={{textAlign:"center",backgroundColor:"white"}} colspan="2"><input type="submit" value="Update" style={{backgroundColor:"#0E8388",color:"white",width:"50%",borderRadius:"6px"}}></input></td>
            </tr>
        </table>
    </div>
    )
}
function Deleteform(){
    return(
        <div className="cform">
        <table>   
                 <center><h2>Delete user</h2></center>
                 <br/>
            <tr>
                <td style={{backgroundColor: "white"}}><input type="text" placeholder='Enter Username' style={{borderRadius:"6px"}}></input></td>
            </tr>
            <br/>
            <tr>
                <td  style={{textAlign:"center",backgroundColor:"white"}} colspan="2"><input type="submit" value="Delete" style={{backgroundColor:"#0E8388",color:"white",width:"50%",borderRadius:"6px"}}></input></td>
            </tr>
        </table>
    </div>
    )
}
function GetDetailsfrom(){
    return(
        <div className="cform">
        <table>   
                 <center><h2>Get Details</h2></center>
                 <br/>
            <tr>
                <td style={{backgroundColor: "white"}}><input type="text" placeholder='Enter Username' style={{borderRadius:"6px"}}></input></td>
            </tr>
            <br/>
            <tr>
                <td style={{textAlign:"center",backgroundColor:"white"}} colspan="2"><input type="submit" value="Get Details" style={{backgroundColor:"#0E8388",color:"white",width:"60%",borderRadius:"6px"}}></input></td>
            </tr>
        </table>
    </div>
    )
}

    return(
        <div className="containerFluid profm">
            <div className="row">
                <div className="profmb" style={{marginTop:"10%",display:"flex",justifyContent:"center",justifyContent:"space-evenly"}}>
                    <Button variant="success" className='col-md-2' onClick={() => handleClick('button1')}style={{marginLeft:"2px"}}>Create User</Button>
                    <Button variant="warning" className='col-md-2' onClick={() => handleClick('button2')}>Update User</Button>
                    <Button variant="danger" className='col-md-2' onClick={() => handleClick('button3')} >Delete User</Button>
                    <Button variant="danger" className='col-md-2' onClick={() => handleClick('button4')} style={{backgroundColor:"blue"}}>Get Details</Button>
                </div>
            </div>



            <div className='profmform'>
            {selectedButton === 'button1' && <Createform />}
      {selectedButton === 'button2' && <Updateform />}
      {selectedButton === 'button3' && <Deleteform />}
      {selectedButton === 'button4' && <GetDetailsfrom />}
        </div>
        </div>
    )
}
export default ProfileForms;