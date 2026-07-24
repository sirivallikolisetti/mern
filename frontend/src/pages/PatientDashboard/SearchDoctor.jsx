import { useState } from "react";

function SearchDoctor(){

const [department,setDepartment] = useState("");

return(

<div style={{padding:"40px"}}>

<h1>Search Doctor</h1>

<input
placeholder="Enter Department"
value={department}
onChange={(e)=>setDepartment(e.target.value)}
/>

<p>Searching for: {department}</p>

</div>

);

}

export default SearchDoctor;