import { Button, Grid, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JobService from '../../assets/services/job.service';
import JobCard from '../../components/JobCard/JobCard';
import { IJobListDTO } from 'components/JobCard/IJobListDTO';

function JobList() {
    const [keyword, setKeyword] = useState<string>('');
    const [jobs, setJobs] = useState<IJobListDTO[]>([]);

    function search() {
        JobService.search(keyword).then(
            response => setJobs(response)
        )
        console.log(`Buscando jobs com a palavra ${keyword}`);
    }

    function loadJobs() {
        JobService.list().then( (data) => setJobs(data) );
    }

    useEffect(loadJobs, []);

    return (
        <div>
            <Grid container spacing={3} alignItems="flex-end" style={{ marginBottom: "24px" }}>
                <Grid item>
                    <SearchIcon/>
                </Grid>
                <Grid item md={7}>
                    <TextField
                        fullWidth
                        id="search-job"
                        label="Buscar oportunidade"
                        value={keyword}
                        onChange={event => setKeyword(event.target.value)} />
                </Grid>
                <Grid item md={"auto"}>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={search}
                    >Pesquisar</Button>
                </Grid>
                <Grid item md={"auto"}>
                    <Button
                        color="primary"
                        variant="contained"
                        component={Link}
                        to="/new-job"
                    >Adicionar Vaga</Button>
                </Grid>
            </Grid>
            { jobs?.map( (job, index) => <JobCard job={job} removeCallback={loadJobs} key={`job-${index}`} />) }
        </div>
    );
}

export default JobList;