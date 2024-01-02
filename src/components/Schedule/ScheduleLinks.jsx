import React from "react";

const ScheduleLinks = ({ setDay , day}) => {
  return (
    <div className="links">
      <button className={day === 'Monday' ? 'active' : ''} onClick={() => setDay("Monday")}>
        Segunda
      </button>
      <span>/</span>
      <button className={day === 'Tuesday' ? 'active' : ''} onClick={() => setDay("Tuesday")}>
        Terça
      </button>
      <span>/</span>
      <button className={day === 'Wednesday' ? 'active' : ''} onClick={() => setDay("Wednesday")}>
        Quarta
      </button>
      <span>/</span>
      <button className={day === 'Thursday' ? 'active' : ''} onClick={() => setDay("Thursday")}>
        Quinta
      </button>
      <span>/</span>
      <button className={day === 'Friday' ? 'active' : ''} onClick={() => setDay("Friday")}>
        Sexta
      </button>
    </div>
  );
};

export default ScheduleLinks;
