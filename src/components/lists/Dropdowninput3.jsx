import React from 'react'
// {/* <i class="fa fa-calendar"></i> */}
const Dropdowninput = () => {
    
  return (
    <div>
        <div className="label">
     <label for="Select your Car type"><span><i class="fa fa-map-marker" style={{fontSize:"23px",color:"red"}}></i>
</span>Drop-of</label>
        </div>
        <div className="list-conatiner">
<select id="timeSelect" name="time">
  <option value="08:00">Islamabad</option>
  <option value="08:00">Faislabad</option>
  <option value="09:00">Peshawar</option>
  <option value="10:00">Quetta</option>
  <option value="10:00">Karachi</option>

</select>
    </div>
        </div>
  )
}

export default Dropdowninput
