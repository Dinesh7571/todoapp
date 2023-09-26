import React from 'react'
import '../App.css'
function CreateTodo({ value, onChange, onPress ,onCheckboxChange}) {

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && onPress) {
      onPress();
    }
  };

  return (
     <div className='CreateTodo'>
      
      <label className="custom-checkbox" 
          >
      <input type="checkbox" checked={false} />
      <span className="checkmark"></span>
      </label>

     <input className='inputTodo'
       type="text"
       value={value}
       onChange={(e) => onChange(e.target.value)}
       onKeyPress={handleKeyPress}
     />
     

    </div>
  )
}

export default CreateTodo