import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import JobService from '../../assets/services/job.service';
import JobDetails from '../../components/JobDetails/JobDetails';

function Job() {
    const { id } = useParams();
    const [job, setJob] = useState({});
    const [openDialog, setOpenDialog] = useState(false);

    const loadData = () => {
        JobService.get(id)
            .then((data) => setJob(data))
    }

    useEffect(loadData, [id]);

    function apply(event) {
        event.preventDefault();
        console.log(`Applied to the job. Good lucky!`);
        setOpenDialog(true);
    }

    function closeDialog() {
        setOpenDialog(false);
    }

    return (
        <Grid container spacing={1} alignItems="flex-end">
            <form noValidate autoComplete="off" onSubmit={$event => apply($event)}>
                <JobDetails job={job} />
                <Grid item justifyContent="space-between">
                    <Button
                        type="submit"
                        variant="outlined"
                        color="default"
                        component={Link}
                        to="/"
                    >Voltar</Button>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >Candidatar-se</Button>
                </Grid>

                <Dialog
                    open={openDialog}
                    onClose={closeDialog}
                >
                    <DialogTitle>Candidatura enviada!</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <p>Sua candidatura foi enviada.</p>
                            <p>Desejamos boa sorte!</p>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button type="button" color="primary"
                            onClick={closeDialog}>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        </Grid>
    );
}

export default Job;