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
import { MerchantListHead, MerchantListToolbar, MerchantMoreMenu } from '../sections/@dashboard/merchant';

// ----------------------------------------------------------------------


const Data = [
  {
    "id" : "1",
    "name" : "Tohid",
    "SSMNumber" : "11112356845",
    "phone" : "1111256482",
    "email" : "tohid@gmail.com",
    "walletBalance" : "11",
    "operationalHours" : "11",
    "foodType" : "FoodType",
    "CuisineType" : "Cuisine type",
    "customerContactNumber" : "11123652220",
    "status" : "active",
    "deliveryRadius" : "6",
    "location" : "Dhaka Bangladesh",
    "Category list" : "",
    "createAt" : "2/1/2022",
    "updateAt" : "2/1/2022"
  },
  {
    "id" : "2",
    "name" : "Rashed",
    "SSMNumber" : "2223652321",
    "phone" : "22365214",
    "email" : "rashed@gmail.com",
    "walletBalance" : "22",
    "operationalHours" : "22",
    "foodType" : "FoodType",
    "CuisineType" : "Cuisine type",
    "customerContactNumber" : "22356521",
    "status" : "active",
    "deliveryRadius" : "2",
    "location" : "",
    "Category list" : "",
    "createAt" : "2/12/2022",
    "updateAt" : "2/12/2022"
  },
  {
    "id" : "3",
    "name" : "Imtiaj",
    "SSMNumber" : "33652115665",
    "phone" : "332236521",
    "email" : "tohid@gmail.com",
    "walletBalance" : "33",
    "operationalHours" : "33",
    "foodType" : "FoodType",
    "CuisineType" : "Cuisine type",
    "customerContactNumber" : "56552112",
    "status" : "active",
    "deliveryRadius" : "6",
    "location" : "",
    "Category list" : "",
    "createAt" : "2/4/2022",
    "updateAt" : "2/4/2022"
  },
  {
    "id" : "4",
    "name" : "Tohid",
    "SSMNumber" : "44456212455",
    "phone" : "4445698200",
    "email" : "tohid@gmail.com",
    "walletBalance" : "10",
    "operationalHours" : "10",
    "foodType" : "FoodType",
    "CuisineType" : "Cuisine type",
    "customerContactNumber" : "56552112",
    "status" : "active",
    "deliveryRadius" : "6",
    "location" : "",
    "Category list" : "",
    "createAt" : "2/5/2022",
    "updateAt" : "2/5/2022"
  }
]


const TABLE_HEAD = [
  { 
    label: 'ID',
    id: 'id', 
    alignRight: false 
  },
  { 
    label: 'Name', 
    id: 'name', 
    alignRight: false 
  },
  { 
    label: 'SSM Number', 
    id: 'SSMNumber', 
    alignRight: false 
  },
  { 
    label: 'Email', 
    id: 'email',
    alignRight: false 
  },
  { 
    label: 'Phone', 
    id: 'phone',
    alignRight: false 
  },
  { 
    label: 'Refund Wallet', 
    id: 'refundWallet', 
    alignRight: false 
  },
  { 
    label: 'Created', 
    id: 'createAt', 
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

export default function User() {
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
            Merchant
          </Typography>
          {/* <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New User
          </Button> */}
        </Stack>

        <Card>
          <MerchantListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <MerchantListHead
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
                      const { id, name, SSMNumber, email, phone, walletBalance, refundWallet, createAt } = row;
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
                          <TableCell align="left">{SSMNumber}</TableCell>
                          <TableCell align="left">{email}</TableCell>
                          <TableCell align="left">{phone}</TableCell>
                          <TableCell align="left">{walletBalance}</TableCell>
                          <TableCell align="left">{createAt}</TableCell>   

                          <TableCell align="right">
                            <Tooltip title = "Disable Merchant" > 
                              <IconButton> 
                                <Iconify icon="eva:person-delete-fill" width={24} height={24} />
                              </IconButton>
                             </Tooltip>
                            {/* <MerchantMoreMenu /> */}
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
