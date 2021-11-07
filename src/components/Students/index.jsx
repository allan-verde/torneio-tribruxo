import "./style.css";

const Students = ({ stud }) => {
  return (
    <div className="conteudo">
      <div className="conteudo-img">
        {stud.image !== "" ? (
          <img src={stud.image} alt={stud.name} />
        ) : (
          <img
            src="https://triunfo.pe.gov.br/pm_tr430/wp-content/uploads/2018/03/sem-foto.jpg"
            alt="sem-avatar"
          />
        )}
      </div>
      <div className="conteudo-descricao">
        <h3>
          NAME: <span>{stud.name}</span>
        </h3>
        {stud.house !== "" ? (
          <h3>
            HOUSE: <span>{stud.house}</span>
          </h3>
        ) : (
          <h3>HOUSE: Casa não definida</h3>
        )}
      </div>
    </div>
  );
};

export default Students;
