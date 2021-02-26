import React from 'react';
import BasicCard from "./BasicCard";

const TodoCard = () => {
    return (
        <div>
            <br/>
            <br/>

            <div style={{flex: "50%", padding: "10px"}}>
                <BasicCard nametask={"Implement Login View"} statetask={"In progress"} datetask={"12/05/2019"} author={"Santiago Carrillo"}/>

                <BasicCard nametask={"Implement Login Controller"} statetask={"Ready"} datetask={"12/05/2019"} author={"Santiago Carrillo"}/>

                <BasicCard nametask={"Facebook Integration"} statetask={"Completed"} datetask={"12/09/2019"} author={"Santiago Carrillo"}/>
            </div>
            <br/>
            <br/>
        </div>
    );
};

export default TodoCard;