import React, {useState} from 'react';
import Member from './addmember';

function Members() {
    const [members, setMembers] = useState([{id: 0, name: 'Daniel',  role: 'Forklift'}, {id: 1, name: 'Leslie', role: 'Full-Stack'}, {id: 2, name: 'Mo', role: 'C Sharp'}, {id: 3, name: 'Parshva', role: 'C++'},] )


  return (
    <>
        <Member members={members} setMembers={setMembers} />
    {members.map((member, index) => (
      <div className="note" key={index}>
        <h2>{member.name}</h2>         <h2>{member.role}</h2> 
     
     
      </div>
    ))}
  </>
);

}

export default Members;