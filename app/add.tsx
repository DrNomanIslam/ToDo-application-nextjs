'use client';
import React from 'react';
import {Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { propTypes } from 'react-bootstrap/esm/Image';

export function AddTask(props) {
    return (
        <>
        <Card>
        <Card.Title style={{backgroundColor:'#ebf1f2',padding:'10px', fontSize:'12px'}}> Add/Edit a task</Card.Title>
        <Card.Body>
                <label>Enter detail for the task: </label><input value={props.selected.text} style={{margin: '5px', lineHeight:'normal'}} type="text" onChange={e => props.select_fun(e.target.value)} /><Button  style={{margin: '5px'}} size="sm" onClick={()=>props.add_edit()}>Submit</Button>
        </Card.Body>
        </Card>
        </>
    )

}
