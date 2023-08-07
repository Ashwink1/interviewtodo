
import React,{useState} from 'react';

function InputBox({addList}) {

  const [search,setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleAddList = () => {
    addList(search);
    setSearch('');
  }    
  return (
    <>
       <input type="text" value={search} placeholder="Enter your todo" onChange={handleChange} />
        <button onClick={handleAddList}>Add</button>
    </>
  )
}

export default InputBox
