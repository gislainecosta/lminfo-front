import axios from 'axios';

let baseUrl = process.env.REACT_APP_BACKEND_URL;

let token = window.localStorage.getItem("token");

const getEmployee = (employess) =>({
  type: "GET_EMPLOYEES",
  employees: employess,
})

