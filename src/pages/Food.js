import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import Tooltip from '@mui/material/Tooltip';

// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  // Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination
} from '@mui/material';
// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import { FoodListHead,  FoodListToolbar, FoodMoreMenu } from '../sections/@dashboard/Food';

// ----------------------------------------------------------------------

const Data = [
  {
    "id" : "1",
    "name" : "Burgers",
    "image" : "https://freedesignfile.com/upload/2020/07/Online-Shopping-Banner-Mobile-App-Vector.jpg",
    "type" : "user",
    "status" : "active",
    "createAt" : "2/1/2022",
    "updateAt" : "2/1/2022"
  },
  {
    "id" : "2",
    "name" : "Nasi Lemak",
    "image" : "https://freedesignfile.com/upload/2020/07/Online-Shopping-Banner-Mobile-App-Vector.jpg",
    "type" : "merchant",
    "status" : "active",
    "createAt" : "2/2/2022",
    "updateAt" : "2/2/2022"
  },
  {
    "id" : "3",
    "name" : "Ice Latte",
    "image" : "https://freedesignfile.com/upload/2020/07/Online-Shopping-Banner-Mobile-App-Vector.jpg",
    "type" : "user",
    "status" : "active",
    "createAt" : "2/3/2022",
    "updateAt" : "2/3/2022"
  },
  {
    "id" : "4",
    "name" : "Sushi",
    "image" : "https://freedesignfile.com/upload/2020/07/Online-Shopping-Banner-Mobile-App-Vector.jpg",
    "type" : "merchant",
    "status" : "active",
    "createAt" : "2/4/2022",
    "updateAt" : "2/4/2022"
  },
  {
    "id" : "5",
    "name" : "Fried Chicken",
    "image" : "https://freedesignfile.com/upload/2020/07/Online-Shopping-Banner-Mobile-App-Vector.jpg",
    "type" : "merchant",
    "status" : "active",
    "createAt" : "2/4/2022",
    "updateAt" : "2/4/2022"
  },
]


const TABLE_HEAD = [
  { 
    label: 'ID',
    id: 'id', 
    alignRight: false 
  },
  { 
    label: 'Food name ', 
    id: 'title', 
    alignRight: false 
  },
  { 
    label: 'Updated At', 
    id: 'createAt', 
    alignRight: false 
  },
  { 
    label: 'Created At', 
    id: 'updateAt', 
    alignRight: false 
  },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function Food() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = Data.map((n) => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];
  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }
  //   setSelected(newSelected);
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Data.length) : 0;

  const filteredUsers = applySortFilter(Data, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  return (
    <Page title="User | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Food
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard/food/create"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Food
          </Button>
        </Stack>

        <Card>
        
          <FoodListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />
          

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <FoodListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  // rowCount={Data.length}
                  // numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  // onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { id, name, updateAt,  createAt } = row;
                      const isItemSelected = selected.indexOf(name) !== -1;

                      return (
                        <TableRow
                          hover
                          key={id}
                          // tabIndex={-1}
                          // role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                         
                          <TableCell align="left">{id}</TableCell>
                          <TableCell align="left">{name}</TableCell>
                          <TableCell align="left">{updateAt}</TableCell>
                          <TableCell align="left">{createAt}</TableCell>   
                          <TableCell align="left">
                            <FoodMoreMenu />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={Data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
