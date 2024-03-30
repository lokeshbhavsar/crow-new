import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../data/theme"
import { mockDataContacts } from "../../data/dummyData"

import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },

    {
      field: "collection",
      headerName: "Collection",
      flex: 1,
     
    },
    {
      field: "floorPrice",
      headerName: "Floor price",
    
  
   
     
      flex: 1,
    },
    {
      field: "averagePrice",
      headerName: "Avg. price",
      flex: 1,
    },
    {
      field: "MktCap",
      headerName: "Mkt Cap",
      flex: 1,
    },
   
    {
      field: "volume",
      headerName: "% Volume",
      flex: 1,
    },
    {
      field: "traders",
      headerName: "Traders",
     
    },
    {
        field: "sales",
        headerName: "Sales",
       
      },
  ];

  return (
    <Box m="20px">
    
    <div className="container">
    <Box
        m="150px 0 0 0"
   
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid gray",
            background:"#000",
            color:"#fff"
          },
          "& .name-column--cell": {
            
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#c3976a",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#c3976a",
         
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
            backgroundColor: "#c3976a",
            marginTop:"20px",
            marginBottom:"20px",
          },
          "& .css-rtrcn9-MuiTablePagination-root .MuiTablePagination-selectLabel": {
             marginTop:"10px"
          },
          "& .css-levciy-MuiTablePagination-displayedRows": {
            marginTop:"14px"
          }
        }}
      >
          <div className="launchpad-top-second">
      <h6 className="launchpad-title">
        <span style={{color:"#c3976a"}}>NFT STAKING </span>
      </h6>
      <h2 className="launchpad-description">NFT STAKING DETAILS PAGE</h2>
    
    </div>
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </div>
    </Box>
  );
};

export default Contacts;
