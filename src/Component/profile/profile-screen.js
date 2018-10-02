import React, { Component } from 'react'

import '../Assets/main-screen.css';
import '../Assets/profileScreen.css';
import { Button } from 'react-bootstrap';

class ProfileScreen extends Component {

    render() {
        return(

    <form>
{/* <div className="profileScreen">
    <fieldset>
    <legend>Account</legend>
    
    <label for="username">Username: </label>
    <input type="text" id="username" name="username" placeholder="username" required aria-required="true"/>
<br/>
    <label for="password">Password: </label>
    <input type="text" id="password" name="password" placeholder="password" required aria-required="true"/>
    <br/>
    </fieldset>
</div> */}
<br/>
<div className="profileScreen">
    <fieldset>
        <legend>Personal information</legend>
    <label for="firstname">Firstname: </label>
    <input type="text" id="firstname" placeholder="Your Firstname" required aria-required="true"/>
    <br/>
    <label for="surename">Surename: </label>
    <input type="text" id="surename" placeholder="Your Surename" required aria-required="true"/>
    <br/>
    <label for="Email:">Email: </label>
    <input type="text" id="Email:" name="gender" value="" placeholder="example@somewhere.com"/>
    <br/>
    <label for="Birthday:">Date of Birth: </label>
    <input type="date" id="Birthday:" name="" value=""/>
    </fieldset>
</div>
<br/>
{/* <div className="profileScreen">
<fieldset>
    <legend>Favorite Color</legend>
<label for="favorite_color">Favorite color</label>
<select name="favorite_color" id="favorite_color">
    <option>Red</option>
    <option>Blue</option>
    <option>Green</option>
    <option>Other</option>
</select>
</fieldset>
</div> */}
<br/>
<div className="profileScreen">
<fieldset>
    <legend>Gender</legend>
    <label for="gender_male">Male</label>
    <input type="radio" id="gender_male" name="gender" checked="checked" value="male"/>
    <br/>
    <label for="gender_female">Female</label>
    <input type="radio" id="gender_female" name="gender" value="female"/>
</fieldset>
</div>
<br/>
<div className="profileScreen">
    <fieldset>
        {/* <legend>Address</legend> */}
        <label for="firstname">Address:</label>
        <input type="text" id="Address" placeholder="Address" required aria-required="true"/> 
        <br/> 
    <label for="country">Country: </label>
        <select type="text" id="country" required>
            <option>Norway</option>
            <option>Canada</option>
            <option>Germany</option>
            <option>The USA</option>
            <option>France</option>
            <option>Italy</option>
            <option>Turkey</option>
            <option>Cyprus</option>
            <option>Russia</option>
            <option>Australia</option>
            <option>Spain</option>
            <option>Mexico</option>
            <option>India</option>
            <option>Brazil</option>
            <option>Japan</option>
        </select>
    <br/>
    <label for="zip-code">Zip-Code: </label>
    <input type="text" id="zip-code" name="" value="" maxlength="5"/>
    <br/>
    <label for="street:">Street: </label>
    <input type="text" id="street:" name="" value=""/>
    <br/>
    </fieldset>
    </div>
           
    <br/>
    
 <div>
     
    {/* <fieldset>
        <legend>Additional Information</legend>
        <label for="CV">CV</label>
       <input type="file" id="CV"/>
        <br/>
        <br/>
        <textarea name="message" rows="10" cols="30" required></textarea>
        <br/>
        <input type="submit" value="submit"/>
    </fieldset> */}
</div>

<div className="profileScreen">
<br/>
<input id="text_name" type="text" name="name" value=""/>
<br/>
<Button bsStyle="btn btn-outline-success btn-lg">Submit</Button>

</div>
</form>
        )
    }
}

export default ProfileScreen