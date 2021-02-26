import React from 'react';
import {Card, CardActionArea, CardContent, CardHeader, Typography} from "@material-ui/core";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

function BasicCard(props) {
    return (
        <Card style={{marginBottom:"20px"}}>
            <CardActionArea>
                <CardHeader
                    action={
                        <div>
                            <AssignmentTurnedInIcon style={{padding:"10px"}}/>
                            <br/><br/><br/><br/><br/>
                        </div>
                    }
                    title={props.nametask}
                    subheader={props.statetask}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.datetask}
                        <br/>
                        {props.author}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BasicCard;