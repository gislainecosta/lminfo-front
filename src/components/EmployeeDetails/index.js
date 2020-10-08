import React, { useState } from 'react';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import CakeIcon from '@material-ui/icons/Cake';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import AlertDialog from '../../components/SimpleAlert';

import { delEmployee } from '../../functions/integration'

import {
    EmployeeWrapper,
    ContainerEmployee,
    PhotoWrapper,
    Photo,
    Name,
    Details,
    DetailsSection,
    ActionsIcons
} from './styles';

const EmployeeDetails = (props) => {
    const [open, setOpen] = useState(false);

    const alertOpen = () => {
        setOpen(true);
    };

    const deleteEmployee = (id) =>{
        const body = {
            id: id,
        };
        delEmployee(body);
        setOpen(false);
    }

    const alertClose = () => {
        setOpen(false);
    };

    return(
        <EmployeeWrapper>
            <ContainerEmployee>
                <PhotoWrapper><Photo src={props.photo} alt='Foto-perfil'/></PhotoWrapper>
                <DetailsSection>
                    <Name>{props.name}</Name>
                    <Details>
                        <CakeIcon style={{ color: '#f83333', fontSize: 24, marginRight: '1%' }} />
                        {props.birthDate}
                    </Details>
                    <Details>
                        <MonetizationOnIcon style={{ color: '#f83333', fontSize: 24, marginRight: '1%' }} />
                        R$ {props.salary},00
                    </Details>
                </DetailsSection>
        
                <ActionsIcons>
                    <DeleteForeverIcon
                        onClick={alertOpen}
                        style={{
                            fontSize: 40,
                            cursor: 'pointer', 
                        }}
                    />
                </ActionsIcons>
                <AlertDialog id={props.id} delete={deleteEmployee} open={open} close={alertClose} />
            </ContainerEmployee>
        </EmployeeWrapper>
    )
}
export default EmployeeDetails;