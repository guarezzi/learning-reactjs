import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Job from '../../pages/Job/Job';
import JobRegister from '../../pages/JobRegister/JobRegister';
import Jobs from '../../pages/Jobs/Jobs';

function Content() {
    return (
        <Container maxWidth="md">
            <Router>
                <Switch>

                    <Route exact path='/'>
                        <Jobs />
                    </Route>

                    <Route exact path='/job/:id'>
                        <Job />
                    </Route>

                    <Route exact path='/new-job'>
                        <JobRegister />
                    </Route>

                </Switch>
            </Router>
        </Container>
    );
}

export default Content;