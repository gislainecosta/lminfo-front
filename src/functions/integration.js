import axios from 'axios';

let baseUrl = 'http://localhost:3003';

const getEmployee = (employees) =>({
  type: "GET_EMPLOYEES",
  employee: employees
})

const getOffice = (offices) => ({
  type: "GET_OFFICES",
  office: offices
})

export const getEmployees = async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/employee`, {
    });
    dispatch(getEmployee(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const getOffices = async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/office`, {
    });
    dispatch(getOffice(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const login = (body, history) => {
  axios
    .post(
      `${baseUrl}`, body
    )
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      history.replace("/funcionarios");
    });
};

export const newOffice = (body, dispatch) => {
  axios
    .post(
      `${baseUrl}/office/new`, body
    )
    .then((response) => {
      alert('Cargo criado com sucesso')
      getOffices(dispatch)
    });
};

export const newEmployee = (body, dispatch) => {
  axios
    .post(
      `${baseUrl}/employee/new`, body
    )
    .then((response) => {
      alert('Funcionário criado com sucesso')
      getEmployees(dispatch)
    });
};

export const delEmployee = (body, dispatch) => {
  axios
    .delete(
      `${baseUrl}/employee/delete`, body
    )
    .then((response) => {
      alert('Excluído com sucesso')
      getEmployees(dispatch)
    });
};


