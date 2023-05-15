import React, { Component }  from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function List(props){
    function handleClick(){
        props.deletion(props.id)
    }
  return (

      
      <div className="note">
        id: {props.id}
        <h1 >  Title: {props.title} </h1>
        <p > Author: {props.author}</p>
        <p > ISBN: {props.isbn}</p>
        <p > Publication Year: {props.publication_year}</p>
        <button onClick={handleClick}>Delete</button>
      </div>
  )
}

export default List;