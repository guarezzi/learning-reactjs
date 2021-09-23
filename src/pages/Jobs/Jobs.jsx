import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import JobCard from '../../components/JobCard/JobCard';
import JobService from '../../assets/services/job.service';

function Jobs() {
    const [keyword, setKeyword] = useState('');
    const [jobs, setJobs] = useState([]);

    function search() {
        console.log(`Buscando jobs com a palavra ${keyword}`);
    }

    function loadJobs() {
        JobService.list().then( (data) => setJobs(data) );
    }

    useEffect(loadJobs, []);

    return (
        <div>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <SearchIcon />
                </Grid>
                <Grid item md={7}>
                    <TextField
                        id="search-job"
                        label="Buscar oportunidade"
                        fullWidth
                        value={keyword}
                        onChange={event => setKeyword(event.target.value)} />
                </Grid>
                <Grid item>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={search}
                    >Pesquisar</Button>
                </Grid>
                <Grid item>
                    <Button
                        color="primary"
                        variant="contained"
                        component={Link}
                        to="/new-job"
                    >Adicionar Vaga</Button>
                </Grid>
            </Grid>
            { jobs?.map( (job) => <JobCard job={job} />) }
        </div>
    );
}

export default Jobs;