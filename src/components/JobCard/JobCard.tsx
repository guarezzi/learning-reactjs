import { Button, Card, CardActions, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { IJobListDTO } from './IJobListDTO';

function JobCard(props: { job: IJobListDTO }) {
    return (
        <Card style={{ marginTop: "8px" }}>
            <CardContent>{ props.job?.title }</CardContent>
            <CardActions>
                <Button size="small" color="primary"
                    component={Link} to={`/job/${props.job.id}`}>Saiba Mais</Button>
            </CardActions>
        </Card>
    );
}

export default JobCard;