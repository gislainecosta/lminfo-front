import React, { useState, useContext } from 'react';

import Context from '../../functions/Context';

import { newEmployee } from '../../functions/integration'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import InputText from '../../components/InputText';
import Button from '../../components/Button';

import {
    Container,
    Form,
    Title,
    InputNumber,
    DropContainer,
    ContainerSelect,
    SelectInput,
} from './styles';

const AddEmpoylee = () => {
    const employeeContext = useContext(Context);
    const [values, setValues] = useState({
        name: '',
        surname: '',
        office: '',
        birthDate: '',
        salary: ''
    });

    const submitForm = (event) => {
        event.preventDefault();
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const sendForm = () => {
        const body = {
            name: values.name,
            surname: values.surname,
            photo: 'https://picsum.photos/id/237/200/200',
            office: values.office,
            birthDate: values.birthDate,
            salary: values.salary
        };
        newEmployee(body, employeeContext.dispatch);
        setValues('')
        console.log('chamou aqui!', values)
    }

    const options = employeeContext.offices.map((office) => {
        return <MenuItem value={office.id}>{office.type}</MenuItem>
    });

    return(
        <Container onSubmit={submitForm}>
            <Title>Adicionar Funcionário</Title>
            <Form>
                <DropContainer>
                    <p>Num Futuro, arrastar para enviar a foto</p>
                </DropContainer>
                <InputText 
                    value={values.type}
                    name={'name'}
                    placeholder={'Nome'}
                    change={handleChange('name')}
                />
                <InputText
                    value={values.type}
                    name={'surname'}
                    placeholder={'Sobrenome'}
                    change={handleChange('surname')}
                />

                <InputNumber
                    value={values.birthDate}
                    label="Data de Nascimento"
                    type="date"
                    variant="filled"
                    onChange={handleChange('birthDate')}
                />
                
                <InputNumber
                    value={values.salary}
                    label="Salário"
                    type="number"
                    variant="filled"
                    onChange={handleChange('salary')}
                />

                <ContainerSelect variant="filled">
                    <InputLabel id="selectOffice">Cargo</InputLabel>
                    <SelectInput
                        labelId="selectOffice"
                        value={values.office}
                        onChange={handleChange('office')}
                    >
                        {options}
                    </SelectInput>
                </ContainerSelect>

                <Button click={sendForm} text={'Enviar'} />
            </Form>
            
        </Container>
        
    );
}

export default AddEmpoylee;