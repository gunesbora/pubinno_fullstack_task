import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Container from '@mui/material/Container';


import { useNavigate } from "react-router-dom";

import CircularIndeterminate from '../pages/LoadingGif'


















function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

 

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};




export default function CustomPaginationActionsTable({adress,loading,setLoading}) {
  let navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true)
    
    

  };




  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

 

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - adress.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
        <div>
        
      {loading ? (<TableContainer component={Paper} sx={{display: 'flex',justifyContent:'center'}}>
                <CircularIndeterminate sx={{display: 'flex',justifyContent:'center'}}/>
            </TableContainer>) : (<TableContainer component={Paper} sx={{display: 'flex'}}>

              
       
                {/* <UpdateModal open={open} setOpen={setOpen}  handleClickOpen={handleClickOpen} /> */}
          <Table sx={{ width:"100vw"}} aria-label="custom pagination table">
    
          
            
            <TableBody>
            <TableRow style={{}}>
                     
                     <TableCell  component="th" scope="row">
                       <h2>Name</h2>
                     </TableCell>
                     <TableCell  align="right">
                      <h2>Adress</h2> 
                     </TableCell>
                   
                    
            </TableRow>
              {(rowsPerPage > 0
                ? adress.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : adress
                ).map((row) => (
                    <TableRow key={row.id} sx={{cursor:"pointer"}}onClick={()=>
                        navigate('details',{state:{row}})} >
                     
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell style={{  }} align="right">
                    {row.adress}
                  </TableCell>
                
                 
                </TableRow>
              ))}
    
              {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={adress.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                      inputProps: {
                          'aria-label': 'rows per page',
                        },
                        native: true,
                    }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
    )
    }
     
        
     </div>  
   
  );
}