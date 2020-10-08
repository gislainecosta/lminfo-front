export const initialState = {
  offices: [
  ], 
  employees: [],
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case 'GET_EMPLOYEES':
      const employeeList = action.employee
      return { ...state, employees: employeeList };
    case 'GET_OFFICES':
      const officeList = action.office
      return { ...state, offices: officeList };
    default:
      return state;
  }
};