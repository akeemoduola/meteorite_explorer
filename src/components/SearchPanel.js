import React, { Component } from 'react';
import { Grid, Button, TextField} from '@material-ui/core'
function SearchPanel(props) {
    const onNameChange = event => props.setName(event.target.value);

    const onClick = () => {
        let newName = props.name.toUpperCase();
        let url =  `https://data.nasa.gov/resource/gh4g-9sfh.json?$select=name,id,nametype,recclass,mass,fall,date_extract_y(year) as year,reclat,reclong&$where=upper(name) like '%${newName}%'&$limit=1000`
        props.setUrl(
            encodeURI(url)
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '20px',
                width: '700px',
            }}
        >
            <TextField
                id="standard-name"
                placeholder="Enter search terms"
                fullWidth
                margin="normal"
                value={props.name}
                style={{ alignSelf: 'center' }}
                onChange={onNameChange}
            />
            <Button size="large" style={{ backgroundColor: '#6E7BC4' , color: '#111219', alignSelf: 'center' }} onClick={onClick}>
                SEARCH
            </Button>
        </div>
    );
}

export default SearchPanel;