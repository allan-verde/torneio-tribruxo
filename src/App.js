import "./App.css";
import Students from "./components/Students";
import { useState, useEffect } from "react";

function App() {
  const [api, setApi] = useState([]);
  const [apiFiltred, setApiFiltred] = useState(undefined);
  const [stud1, setStud1] = useState(undefined);
  const [stud2, setStud2] = useState(undefined);
  const [stud3, setStud3] = useState(undefined);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setApi(response));
  }, []);

  useEffect(() => {
    setApiFiltred(api);
  }, [api]);

  useEffect(() => {
    if (typeof stud1 !== "object") {
      setStud1(api[Math.floor(Math.random() * api.length)]);
    } else if (apiFiltred.length === api.length) {
      setApiFiltred(apiFiltred.filter((item) => item.house !== stud1.house));
      return () => {};
    }
  }, [stud1, apiFiltred, api]);

  useEffect(() => {
    if (
      typeof stud1 === "object" &&
      apiFiltred.length < api.length &&
      typeof stud2 !== "object"
    ) {
      setStud2(apiFiltred[Math.floor(Math.random() * apiFiltred.length)]);
    }
    if (
      typeof stud2 === "object" &&
      apiFiltred.filter((e) => e.name === stud2.name).length === 1
    ) {
      setApiFiltred(apiFiltred.filter((item) => item.house !== stud2.house));
      return () => {};
    }
  }, [stud1, stud2, apiFiltred, api.length]);

  useEffect(() => {
    if (
      typeof stud2 === "object" &&
      apiFiltred.filter((e) => e.name === stud2.name).length === 0 &&
      typeof stud3 !== "object"
    ) {
      setStud3(apiFiltred[Math.floor(Math.random() * apiFiltred.length)]);
    }
    if (
      typeof stud3 === "object" &&
      apiFiltred.filter((e) => e.name === stud3.name).length === 1
    ) {
      setApiFiltred(apiFiltred.filter((item) => item.house !== stud3.house));
      return () => {};
    }
  }, [stud2, stud3, apiFiltred]);

  return (
    <div className="App">
      <div className="App-menu">
        {typeof stud3 === "object" ? (
          <>
            <Students stud={stud1} />
            <Students stud={stud2} />
            <Students stud={stud3} />
          </>
        ) : (
          () => {}
        )}
      </div>
      <div>
        <button
          onClick={() => {
            setApiFiltred(api);
            setStud1(undefined);
            setStud2(undefined);
            setStud3(undefined);
          }}
        >
          Tente Novamente
        </button>
      </div>
    </div>
  );
}

export default App;
