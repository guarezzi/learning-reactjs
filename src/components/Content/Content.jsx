import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobView from '../../pages/JobView/JobView';
import JobForm from '../../pages/JobForm/JobForm';
import JobList from '../../pages/JobList/JobList';

function Content() {
    return (
        <Container maxWidth="md" style={{ marginBottom: "24px" }}>
            <Router>
                <Switch>

                    <Route exact path='/'>
                        <JobList />
                    </Route>

                    <Route exact path='/job/:id'>
                        <JobView />
                    </Route>

                    <Route exact path='/new-job'>
                        <JobForm />
                    </Route>

                </Switch>
            </Router>
        </Container>
    );
}

export default Content;