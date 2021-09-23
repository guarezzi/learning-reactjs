import { Grid } from '@material-ui/core';
import React from 'react';

function JobDetails({job}) {
    return (
        <Grid item>
            <h1>Título</h1>
            <p>{job?.title}</p>
            <h1>Descrição</h1>
            <p>{job?.description}</p>
            <h1>Pré-requisito</h1>
            <p>{job?.prerequirements}</p>
            <h1>Salário</h1>
            <p>{job?.salary}</p>
        </Grid>
    );
}

export default JobDetails;