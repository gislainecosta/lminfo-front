import React, { useContext  }from 'react';

import Context from '../../functions/Context';
import { authorization } from "../../functions";

import {
    ContainerList,
    ContainerEmployee,
    Title,
    Office,
    Description
} from './styles';

import CardTravelIcon from '@material-ui/icons/CardTravel';

import EmployeeDetails from '../../components/EmployeeDetails';

const EmployeesList = () => {
    const employeeContext = useContext(Context);

    console.log(employeeContext)
    return(
        <ContainerList>
            <Title>Lista de Funcionários</Title>
            {employeeContext.offices.map((office) => {
                return <ContainerEmployee>
                    <Office>
                        <CardTravelIcon style={{ color: '#ca0000', fontSize: 32 }} />
                        &nbsp; 
                        {office.type}
                    </Office>
                    <Description><i>"{office.description}"</i></Description>
                    
                    {
                        employeeContext.employees.filter((employee) => {
                            return employee.office === office.type
                        }).map((employee) => {
                            return <EmployeeDetails
                                key={employee.id}
                                id={employee.id}
                                photo={employee.photo}
                                name={`${employee.name} ${employee.surname}`}
                                office={employee.office}
                                birthDate={employee.birthDate}
                                salary={employee.salary}
                            />
                        })
                    }
                </ContainerEmployee>
            })}
        </ContainerList>
    );
}

export default EmployeesList;