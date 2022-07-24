import { Button, Grid, TextField } from '@material-ui/core';
import { IJobDetailsDTO } from 'components/JobDetails/IJobDetailsDTO';
import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import JobService from '../../assets/services/job.service';

function JobRegister() {

    const initialValues = {
        id: 0,
        description: '',
        prerequirements: '',
        title: '',
        salary: 0
    };

    const [job, setJob] = useState<IJobDetailsDTO>(initialValues);

    function register(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        JobService.save(job).then(
            () => alert(`Job registered successfully!`) // it will be a modal
        );
    }

    function onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setJob({...job, [event.target.name]: event.target.value });
    }

    return (
        <form noValidate onSubmit={$event => register($event)}>

            <Grid item>
                <TextField
                    id="job-title"
                    label="Título"
                    fullWidth
                    value={job.title}
                    name="title"
                    onChange={onChange}
                    required
                    style={{ marginBottom: '14px' }}
                />
                <TextField
                    id="job-description"
                    label="Descrição"
                    fullWidth
                    value={job.description}
                    name="description"
                    onChange={onChange}
                    required
                    style={{ marginBottom: '14px' }}
                />
                <TextField
                    id="job-pre-requirements"
                    label="Pré-requisitos"
                    fullWidth
                    value={job.prerequirements}
                    name="prerequirements"
                    onChange={onChange}
                    required
                    style={{ marginBottom: '14px' }}
                />
                <TextField
                    id="job-salary"
                    label="Salário"
                    fullWidth
                    value={job.salary}
                    name="salary"
                    type={'number'}
                    onChange={onChange}
                    required
                    style={{ marginBottom: '14px' }}
                />
            </Grid>

            <Grid item style={{ marginTop: '12px', textAlign: 'right' }}>
                <Button
                    variant="outlined"
                    color="default"
                    type="button"
                    component={Link}
                    to="/"
                    style={{ marginRight: "8px" }}
                >Voltar</Button>

                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >Salvar</Button>

            </Grid>

        </form>
    );
}

export default JobRegister;