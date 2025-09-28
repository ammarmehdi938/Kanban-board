import {
  Drawer,
  ListItem,
  ListItemText,
  List,
  Button,
  Box,
} from "@mui/material";
const Header = (props) => {
  const { open, setOpen } = props;

  const handleSideber = () => {
    setOpen(true);
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
        onClick={() => setOpen(!open)}
        sx={{
          borderRadius: "25px",
          backdropFilter: "blur(10px)",
          backgroundColor: "#1B2635CC",
          width: "120px",
          mt: "10px",
          color: "#ffffff",
          border: "1px solid #FFFFFF33",
          animation: "pulse 2s infinite",

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
