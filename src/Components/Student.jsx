import React, { useState } from "react";
import './Student.css';
const Student=()=>{
    const [firstname,setfirstname]=useState("");
    const [lastname,setlastname]=useState("");
    const [mobile,setMobile]=useState("");
    const [city,setcity]=useState("")
    const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(" ");
    const newData = {
      firstname,
      lastname,
      mobile,
      city,
    };
    setSubmittedData([...submittedData, newData]);
    setfirstname("");
    setlastname("");
    setMobile("");
    setcity("");
    console.log(submittedData);
  };

    return(
        <div>
            <form className="form_container" onSubmit={handleSubmit} >
                <div>
                <label>First Name: <input className='allinput' type="text" name="Firstname" value={firstname} onChange={(e)=>setfirstname(e.target.value)} required/></label>
                </div>
                <br/>
                <div>
                <label>Last Name: <input className='allinput' type="text" name="Lastname" value={lastname} onChange={(e)=>setlastname(e.target.value)} required/></label>
                
                </div>
                <br/>
                <div>
                <label>Mobile no.: <input className='allinput' type="number" name="mobilenum" value={mobile} onChange={(e)=>setMobile(e.target.value)} required/></label>
                </div>
                <br/>
                <div>
                <label>City: <input className='allinput' type="text" name="city" value={city} onChange={(e)=>setcity(e.target.value)} required/></label>
                </div>
                <br/>
                <input type="submit" />
            </form>
            {submittedData.length > 0 && (
        <table className="tablecontainer1">
          <thead>
            <tr className="headborder">
              <th className="tableeleborder">First Name</th>
              <th className="tableeleborder">Last Name</th>
              <th className="tableeleborder">Mobile Number</th>
              <th>City</th>
            </tr>
          </thead>
          {submittedData.map((data, index) => (
          <tbody className="headborder">
            
              <tr key={index}>
                <td className="tableeleborder">{data.firstname}</td>
                <td className="tableeleborder">{data.lastname}</td>
                <td className="tableeleborder">{data.mobile}</td>
                <td>{data.city}</td>
              </tr>
              
            
          </tbody>))}
        </table>
      )}
        </div>
    )
}
export default Student