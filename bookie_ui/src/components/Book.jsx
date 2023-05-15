import React, { Component }  from 'react';
import {useState, useEffect} from "react";
import { FormControl, TextField, Button } from '@material-ui/core';
import axios from "axios";
import List from "./List"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Book() {

    const [books , setNewBooks] = useState(null)
    const [formBook, setFormBook] = useState({
      isbn: "",
      title: "",
      author: "",
      publication_year: "",
      review: ""
    })

    useEffect(() => {
      getBooks()
        } ,[])

    function getBooks() {
      axios({
          method: "GET",
          url:"http://localhost:8000/api/book/",
        }).then((response)=>{
          const data = response.data
          setNewBooks(data)
        }).catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
            }
        })}

    function createBook(event) {
        axios({
          method: "POST",
          url:"http://localhost:8000/api/book/",
          data:{
            isbn: formBook.isbn,
            title: formBook.title,
            author: formBook.author,
            publication_year: formBook.publication_year,
            review: formBook.review
           }
        })
        .then((response) => {
          getBooks()
        })

        setFormBook(({
            isbn: "",
            title: "",
            author: "",
            publication_year: "",
            review: ""}))

        event.preventDefault()
    }

    function DeleteBook(id) {
        console.log(id)
        axios({
          method: "DELETE",
          url:`http://localhost:8000/api/book/${id}/`,
        })
        .then((response) => {
          getBooks()
        })
    }

    function handleChange(event) { 
        const {value, name} = event.target
        setFormBook(prevBook => ({
            ...prevBook, [name]: value})
        )}

        const StyledTableCell = styled(TableCell)(({ theme }) => ({
          [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
          },
          [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
          },
        }));
        
        const StyledTableRow = styled(TableRow)(({ theme }) => ({
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
          // hide last border
          '&:last-child td, &:last-child th': {
            border: 0,
          },
        }));

  return (

     <div className=''>

        {/* <form className="create-note"> */}
        <h3 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Adda a book review</h3><br/>
        <center>
        <FormControl>
        <TextField onChange={handleChange} text={formBook.title} name="title"  value={formBook.title} type="text" placeholder="Title" variant='filled' defaultValue="Title"></TextField><br/>
          {/* <input onChange={handleChange} text={formBook.title} name="title" placeholder="Title" value={formBook.title} /><br/> */}
          {/* <textarea /><br/> */}
          <TextField onChange={handleChange} name="isbn" placeholder="Add ISBN" value={formBook.isbn} type="text" variant='filled' defaultValue="Title"></TextField><br/>
          <TextField onChange={handleChange} name="author" placeholder="Add Author" value={formBook.author} type="text" variant='filled' defaultValue="Title"></TextField><br/>
          {/* <textarea onChange={handleChange} name="author" placeholder="Add Author" value={formBook.author} /><br/> */}
          <TextField onChange={handleChange} name="publication_year" placeholder="Add Publication Year" value={formBook.publication_year} type="text" variant='filled' defaultValue="Title"></TextField><br/>
          {/* <textarea onChange={handleChange} name="publication_year" placeholder="Add Publication Year" value={formBook.publication_year} /><br/> */}
          <TextField onChange={handleChange} name="review" placeholder="Add Review" value={formBook.review}  type="text" variant='filled' defaultValue="Title"></TextField><br/>
          {/* <textarea onChange={handleChange} name="review" placeholder="Add Review" value={formBook.review} /><br/> */}
          {/* <button onClick={createBook}>Create Book</button> */}
          <Button variant="contained" onClick={createBook}>Create Book</Button>
        </FormControl>
        </center>
        <br/><br/>
        
          
        {/* </form> */}

        {/* Display a list of books */}
        

        {/* { books && books.map(book => <List
        key={book.id}
        id={book.id}
        title={book.title}
        isbn={book.isbn}
        author={book.author}
        publication_year={book.publication_year}
        review={book.review}
        deletion={DeleteBook}
        />
        )} */}
        
        <center>
        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: 1000 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="right">Author</StyledTableCell>
              <StyledTableCell align="right">ISBN</StyledTableCell>
              <StyledTableCell align="right">Publication Year</StyledTableCell>
              <StyledTableCell align="right">Review</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {books && books.map((book) => (
            <StyledTableRow key={book.id}>
              <StyledTableCell component="th" scope="row">
                {book.id}
              </StyledTableCell>
              <StyledTableCell align="right">{book.title}</StyledTableCell>
              <StyledTableCell align="right">{book.isbn}</StyledTableCell>
              <StyledTableCell align="right">{book.author}</StyledTableCell>
              <StyledTableCell align="right">{book.publication_year}</StyledTableCell>
              <StyledTableCell align="right">{book.review}</StyledTableCell>
              <StyledTableCell align="right">
              <Button variant="contained" color="red" onClick={e => DeleteBook(book.id)}>
                Delete
              </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
          </Table>
        </TableContainer>
        </center>
    

    </div>
  );
}

export default Book;