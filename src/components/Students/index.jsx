import "./style.css";
import { useEffect, useState } from "react";

const Students = ({ api }) => {
  const [apiFiltred, setApiFiltred] = useState(undefined);
  const [stud1, setStud1] = useState(undefined);
  const [stud2, setStud2] = useState(undefined);
  const [stud3, setStud3] = useState(undefined);

  useEffect(() => {
    // NÃO MEXER
    setApiFiltred(api);
  }, [api]);

  useEffect(() => {
    if (stud1 !== undefined && stud2 === undefined) {
      console.log("api-filter-1");
      setApiFiltred(apiFiltred.filter((item) => item.house !== stud1.house));
    } else if (stud2 !== undefined && stud3 === undefined) {
      console.log("api-filter-2");
      setApiFiltred(apiFiltred.filter((item) => item.house !== stud2.house));
    } else if (stud3 !== undefined) {
      console.log("api-filter-3");
      setApiFiltred(apiFiltred.filter((item) => item.house !== stud3.house));
    } else {
      console.log("terminou");
    }
  }, [stud1, stud2, stud3]);

  useEffect(() => {
    setStud1(api[Math.floor(Math.random() * api.length)]);
  }, [api]);

  useEffect(() => {
    if (stud1 !== undefined) {
      setStud2(api[Math.floor(Math.random() * api.length)]);
    }
  }, [stud1, api]);

  useEffect(() => {
    if (stud2 !== undefined) {
      setStud3(api[Math.floor(Math.random() * api.length)]);
    }
  }, [stud2, api]);

  console.log(apiFiltred);
  console.log("api-1", stud1);
  console.log("api-2", stud2);
  console.log("api-3", stud3);
  console.log("-------------");
  return (
    <div>
      <div>oi</div>
      <button>add</button>
    </div>
  );
};

export default Students;
