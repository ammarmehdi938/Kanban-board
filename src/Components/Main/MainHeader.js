import { Box } from "@mui/material";


const MainHeader = () => {

  return (

    <Box style={{ color: 'white'}}>

      <h2 style={{ marginLeft: "20px", marginTop: "50px" }}>
        Feb <br />
        &nbsp; 4
      </h2>
      <span style={{ direction: "column" }}>
        <h1
          style={{ marginLeft: "25", marginTop: "-75px", marginLeft: "80px" }}
        >
          Good Afternoon
        </h1>
        <br />
        <h1 style={{ marginTop: "-40px", marginLeft: "80px" }}>
          What's your plan for today?
        </h1>
      </span>

    </Box>


  )
}

export default MainHeader;