import { Button, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import JobService from '../../assets/services/job.service';

function JobRegister() {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [prerequirements, setPrerequirements] = useState();
    const [salary, setSalary] = useState();

    function register(event) {
        event.preventDefault();

        const job = { title, description, prerequirements, salary };

        JobService.save(job).then(
            () => alert(`Job registered successfully!`) // it will be a modal
        );
    }

    return (
        <form noValidate onSubmit={$event => register($event)}>
            <Grid item>
                <TextField
                    id="job-title"
                    label="Título"
                    fullWidth
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    required
                />
                <TextField
                    id="job-description"
                    label="Descrição"
                    fullWidth
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    required
                />
                <TextField
                    id="job-pre-requirements"
                    label="Pré-requisitos"
                    fullWidth
                    value={prerequirements}
                    onChange={event => setPrerequirements(event.target.value)}
                    required
                />
                <TextField
                    id="job-salary"
                    label="Salário"
                    fullWidth
                    value={salary}
                    onChange={event => setSalary(event.target.value)}
                    required
                />
            </Grid>
            <Grid item>
                <Button
                    variant="outlined"
                    color="default"
                    type="button"
                    component={Link}
                    to="/"
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