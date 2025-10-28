import { Button, Box } from "@mui/material";
import { openTaskDrawer } from "../../Store/Actions/TodoActions";
import { useDispatch } from "react-redux";
const Header = (props) => {
  const dispatch = useDispatch();
  const handleSideber = () => {
    openTaskDrawer(null, dispatch);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "20px",
      }}
    >
      <Button
        onClick={handleSideber}
        sx={{
          borderRadius: "25px",
          backdropFilter: "blur(10px)",
          backgroundColor: "#1B2635CC",
          width: "120px",
          mt: "12px",
          color: "#ffffff",
          border: "1px solid #FFFFFF33",
          animation: "pulse 2s infinite",
          padding: "10px",

          "&:hover": {
            // borderColor: "#19bb84",
          },
        }}
      >
        Click me
      </Button>
    </Box>
  );
};

export default Header;
