import React from "react";
import './Details.css';
import { Link } from "react-router-dom";
function Details(){
return(
    <>
    <div className="Detailsmain">
    <div className="i1">
        <p>VEHICLE VAULT</p>
        <Link to="/" className="und"><p>Back</p></Link>
    </div>
    <div className="i2">
        <h3>DETAILS</h3>
    <table border="1" id="id1">
        <tr>
            <td className="td">Name</td>
            <td className="td">Suprasanna</td>
        </tr>
        <tr>
            <td className="td">Vehicle type</td>
            <td className="td">2 wheeler</td>
        </tr>
        <tr>
            <td className="td">Vehicle Model  </td>
            <td className="td">Bike</td>
        </tr>
        <tr>
            <td className="td">Contact No</td>
            <td className="td">789456123</td>
        </tr>
        <tr>
            <td className="td">Email Id</td>
            <td className="td">abc@gmail.com</td>
        </tr>
        <tr>
            <td className="td">Vehicle Id</td>
            <td className="td">8547</td>
        </tr>
    </table>
    </div>
</div>
</>
)}
export default Details;