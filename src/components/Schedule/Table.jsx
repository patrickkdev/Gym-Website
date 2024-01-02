import React from "react";

const Table = ({ day }) => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td>Aula de ginástica</td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Guilherme A. Silva</td>
        </tr>
        <tr>
          <td>Treinamento Muscular</td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Bruno L. Santos</td>
        </tr>
        <tr>
          <td>Musculação</td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Isabela M. Costa</td>
        </tr>
        <tr>
          <td>Aula de treinamento de ioga</td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Henrique S. Pereira</td>
        </tr>
        <tr>
          <td>Treinamento avançado</td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Rafaela C. Oliveira</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;