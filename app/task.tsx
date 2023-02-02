'use client';
import Accordion from 'react-bootstrap/Accordion';

export default function TaskComponent(props) {
    return (
        <>
            <div style={{width:'80%', fontSize:'10px'}}><b>Task Detail</b><br/>{props.detail}</div>           
        </>
    );
}