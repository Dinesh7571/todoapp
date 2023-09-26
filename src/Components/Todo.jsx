import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Todo = ({ text, completed, onCheckboxChange, onDelete }) => {
  const handleCheckboxChange = () => {
    if (onCheckboxChange) {
      onCheckboxChange(!completed);
    }
  };

  const textClassName = completed ? 'completed-text' : '';

  const textDecorationStyle = completed ? 'line-through' : 'none';

  const textStyle = {
    textDecoration: textDecorationStyle,
  };

  return (
    <div className={`todo ${completed ? 'completed' : ''}`}>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
        />
        <span className="checkmark"></span>
      </label>

      <h3 className={`todoText ${textClassName}`} style={textStyle}>
        {text}
      </h3>

      <CloseIcon className='cross' onClick={onDelete} />
    </div>
  );
};

export default Todo;
