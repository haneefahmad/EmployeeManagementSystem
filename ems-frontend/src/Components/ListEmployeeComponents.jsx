import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponents = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees()
  }, []);

  function getAllEmployees(){
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewEmployee() {
    navigate("/add-employee");
  }

  function updateEmployee(id) {
    navigate(`/update-employee/${id}`);
  }

  function removeEmployee(id) {
    console.log(id);
    deleteEmployee(id)
      .then(() => {setEmployees((prevEmployees) => prevEmployees.filter(emp => emp.id !== id))})
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <button className="btn btn-dark" onClick={addNewEmployee}>
        Add
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => removeEmployee(employee.id)}
                    style={{marginLeft : '10px'}} >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponents;