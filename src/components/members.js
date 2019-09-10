import React, {useState} from 'react';
import Member from './addmember';

function Members() {
    const [members, setMembers] = useState([

    'Daniel', 'Ruben', 'Crystal', 'Leslie', 'Cynthia', 'Marcus', 'Todd', 'Justine'])
  return (
    <>
        <Member members={members} setMembers={setMembers} />
    {members.map((member, index) => (
      <div className="note" key={index}>
        <h2>{member}</h2>
     
      </div>
    ))}
  </>
);

}

export default Members;