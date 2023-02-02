'use client';

import TaskComponent from './task';
import Head from 'next/head';
import React from "react";
import {AddTask} from './add';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Home() {
  const [tasks, setTasks] = React.useState([{
    detail: "Reading"
  }]);


  const [selected, setSelected] = React.useState({
    text:"",
    index: -1
  });

  const select_fn = text => {
    const {index,t} = selected;
    setSelected({index:index, text:text});
  };


  const add_task = detail => {
    const newtasks = [...tasks, { detail }];
    setTasks(newtasks);
  };

  const delete_task = index => {    
    const new_tasks = [...tasks];
    new_tasks.splice(index, 1);
    setTasks(new_tasks);

  };

  const edit_task = index => {
    const newtasks = [...tasks];
    setSelected({
      text: newtasks[index].detail,
      index: index
    });
  };


  const add_edit = () => {
    const index = selected.index;
    if (index==-1) { //to add
      add_task(selected.text);
      setSelected({
        text:"",
        index:-1
      });
    }else {
      const new_tasks = [...tasks];
      const tsk = {detail:selected.text};
      new_tasks.splice(index, 1,tsk);
      setTasks(new_tasks);
      setSelected({
        text:"",
        index: -1
      });

    }
  };



  return (
    <>
    <Head>
      <title>ToDo application</title>
      <meta name='description' content='This is a todo application' />
    </Head>

    <div className='container' style={{margin:'5px', padding: '10px'}}>
          <p style={{fontSize:'24px', color:'#0e3d45',textAlign:'center', fontFamily:'Arial',fontWeight:'bold'}}>Welcome to my ToDoApp</p>
          <br/>
          <div>
          <AddTask select_fun={select_fn} add_edit={add_edit} selected={selected}/>
          </div>

          <p style={{fontSize: '12px', margin:'10px'}}>List of Tasks</p>
          {tasks.map((task, index) => (
            
          <Card key={index} style={{padding: '10px',backgroundColor:'#ebf1f2', margin: '5px',flexDirection:"row"}}>
            <TaskComponent detail={task.detail}>            
            </TaskComponent>
            <div style={{width:'100%', zIndex:2,textAlign:'right'}}>
            <ButtonGroup>
              <Button size='sm' onClick={()=>edit_task(index)}>Edit</Button>&nbsp;<Button size='sm' onClick={()=>delete_task(index)}>Delete</Button>
            </ButtonGroup>
            </div>
          </Card>
          ))}

    </div>
    </>
  )
}
