function MyAppointments(){

return(

<div style={{padding:"30px"}}>

<h2>My Appointments</h2>

<table border="1" width="100%">
<tr>
<th>Doctor</th>
<th>Department</th>
<th>Date</th>
<th>Time</th>
<th>Status</th>
<th>Action</th>
</tr>

<tr>
<td>Dr. Sharma</td>
<td>Cardiology</td>
<td>12 May</td>
<td>10AM</td>
<td>Confirmed</td>
<td><button>Cancel</button></td>
</tr>

</table>

</div>

);

}

export default MyAppointments;