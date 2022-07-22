import { Button, Card, CardActions, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

function JobCard({job}) {
    return (
        <Card style={{ marginTop: "8px" }}>
            <CardContent>{ job?.title }</CardContent>
            <CardActions>
                <Button size="small" color="primary"
                    component={Link} to={`/job/${job.id}`}>Saiba Mais</Button>
            </CardActions>
        </Card>
    );
}

export default JobCard;