import React from 'react';

function ActionButtons({ totalAll, totalActive, totalCompleted, activeButton, handleAll, handleActive, handleCompleted ,clearComplete}) {
  return (
    <div className='container'>
      <section className='actionBox'>
        <div><label>{activeButton === 'all' ? totalAll : activeButton === 'active' ? totalActive : totalCompleted} item left</label></div>
        <div className='filter'>
          <label
            className={activeButton === 'all' ? 'active label' : 'label'}
            onClick={handleAll}
          >
            All
          </label>
          <label
            className={activeButton === 'active' ? 'active label' : 'label'}
            onClick={handleActive}
          >
            Active
          </label>
          <label
            className={activeButton === 'completed' ? 'active label' : 'label'}
            onClick={handleCompleted}
          >
            Completed
          </label>
        </div>
        <div><label onClick={clearComplete}>Clear Completed</label></div>
      </section>
    </div>
  );
}

export default ActionButtons;
