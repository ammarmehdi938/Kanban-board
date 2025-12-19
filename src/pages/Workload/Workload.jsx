import MainSideBar from "../../Components/mainSide";
import MainGrid from "../../Components/mainGrid";
import { Box } from "@mui/material";
import withLayout from "../../Components/withLayout";

const Workload = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <MainSideBar />
      <MainGrid />
    </Box>
  );
};
export default withLayout(Workload);
