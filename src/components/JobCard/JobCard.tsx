import { Button, Card, CardActions, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { IJobListDTO } from './IJobListDTO';
import DeleteIcon from '@material-ui/icons/Delete';
import JobService from 'assets/services/job.service';
import { useState } from 'react';

function JobCard(props: { job: IJobListDTO, removeCallback: (id: number) => void }) {

    const [removendo, setRemovendo] = useState<number>(0);

    function excluir(id: number) {
        setRemovendo(id);
        JobService.remove(id)
            .then( 
                () => {
                    props.removeCallback(id);
                    setRemovendo(0);
                }
            );
    }

    return (
        <Card style={{ marginTop: "8px" }}>
            <CardContent>{ props.job?.title }</CardContent>
            <CardActions>
                
                <Button size="small" color="primary" component={Link} to={`/job/${props.job.id}`}>
                    Saiba Mais
                </Button>
                
                <Button 
                    size="small"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    type="button"
                    onClick={event => excluir(props.job.id)}
                >
                    Excluir
                </Button>

            </CardActions>
        </Card>
    );
}

export default JobCard;