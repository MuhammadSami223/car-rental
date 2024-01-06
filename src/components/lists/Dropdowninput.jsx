import React from 'react'

const Dropdowninput = () => {
    
  return (
    <div>
        <div className="label">
     <label for="Select your Car type"><span><i class="fa fa-car"  style={{fontSize:"23px",color:"red"}}></i>
</span>Select your Car type</label>
        </div>
        <div className="list-conatiner">
<select id="timeSelect" name="time">
  <option value="08:00">Select your Car type</option>
  <option value="08:00">Audi</option>
  <option value="09:00">Foutuner</option>
  <option value="10:00">Corolla</option>
  <option value="10:00">Vezel</option>
  <option value="10:00">City</option>
  <option value="10:00">Civic</option>
  <option value="10:00">Vigo</option>
</select>
    </div>
        </div>
  )
}

export default Dropdowninput
