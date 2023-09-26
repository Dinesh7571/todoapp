import React, { useEffect, useState } from 'react';
import './App.css';
import Container from '@mui/material/Container';
import CreateTodo from './Components/CreateTodo';
import Todo from './Components/Todo';
import ActionButtons from './Components/ActionButtons';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const [activeButton, setActiveButton] = useState('all');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const handleInputChange = (newValue) => {
    setText(newValue);
  };

  const handleButtonPress = () => {
    if (text.trim() !== '') {
      const newTodo = { text, id: Date.now(), completed: false };
      const updatedTodos = [newTodo, ...todos];
      setTodos(updatedTodos);
      setText('');
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }
  };

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleAll = () => {
    setActiveButton('all');
  };

  const handleActive = () => {
    setActiveButton('active');
  };

  const handleCompleted = () => {
    setActiveButton('completed');
  };

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const totalAll = todos.length;
  const totalActive = todos.filter((todo) => !todo.completed).length;
  const totalCompleted = todos.filter((todo) => todo.completed).length;

  const filteredTodos = activeButton === 'all'
    ? todos
    : activeButton === 'active'
    ? todos.filter(todo => !todo.completed)
    : todos.filter(todo => todo.completed);

  return (
    <>
      <Container maxWidth="sm">
        <div>
          <h1 className='todoName'>T O D O</h1>
        </div>

        <CreateTodo
          value={text}
          onChange={handleInputChange}
          onPress={handleButtonPress}
        />

        <div className='allTodo'>
          {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onCheckboxChange={() => handleCheckboxChange(todo.id)}
              onDelete={() => handleDelete(todo.id)}
            />
          ))}
        </div>
        <ActionButtons
          totalAll={totalAll}
          totalActive={totalActive}
          totalCompleted={totalCompleted}
          activeButton={activeButton}
          handleAll={handleAll}
          handleActive={handleActive}
          handleCompleted={handleCompleted}
          clearComplete={handleClearCompleted}
        />
      
      </Container>
      
    </>
  );
}

export default App;
