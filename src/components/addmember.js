import React, {useState} from 'react';


function AddMember() {

    const [addNewMember, setNewMember] = useState([])
    
    const handleAdd = event => {
        console.log(event)
        setNewMember(...addNewMember, event.target.name)
    }

  return (
    <>
<form>
    <input type='text' name='member' onChange={handleAdd} placeholder='Enter Member Name'>

    </input>
    <button type="submit">Submit</button>
</form>
  </>
);

}

export default AddMember;