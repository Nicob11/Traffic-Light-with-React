import React, { useState } from "react";

const Semaforo = () => {
  const [select, setSelect] = useState("");

  const [mostrar, setMostrar] = useState(false);

  const danger =
    select === "danger" ? "luces bg-danger clicked" : "luces bg-danger";
  const warning =
    select === "warning" ? "luces bg-warning clicked" : "luces bg-warning";
  const succes =
    select === "success" ? "luces bg-success clicked" : "luces bg-success";
  let purple = select === "purple" ? "luces purple clicked" : "luces purple";

  if (!mostrar) {
    purple += " d-none";
  }

  const youClick = (e) => {
    setSelect(e.target.id);
  };

  const changeLigth = () => {
    setSelect("danger");
    if (select === "danger") {
      setSelect("warning");
    } else if (select === "warning") {
      setSelect("success");
    } else if(select === 'success'){
      setSelect("purple");
    }else{setSelect('danger')}
  };

  const createLigth = () => {
    setMostrar(!mostrar);
  };
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="semaf d-flex flex-column bg-dark mx-auto"></div>
      <div className="semaforoBox d-flex flex-column bg-dark mx-auto">
        <div className={danger} id="danger" onClick={youClick}></div>
        <div className={warning} id="warning" onClick={youClick}></div>
        <div className={succes} id="success" onClick={youClick}></div>
        <div className={purple} id="purple" onClick={youClick}></div>
      </div>
      <div className="mx-auto my-2">
        <button className="btn btn-success" onClick={changeLigth}>
          Change Ligth
        </button>
      </div>
      <div className="mx-auto my-2">
        <button className="btn btn-dark" onClick={createLigth}>
          Add a ligth
        </button>
      </div>
    </div>
  );
};

export default Semaforo;
