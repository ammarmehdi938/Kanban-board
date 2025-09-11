
import { Drawer, ListItem, ListItemText, List, Button, Box } from "@mui/material";
const Header = (props) => {

    const { open, setOpen } = props;

    const handleSideber = () => {
        setOpen(true)
    }


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
        <Button onClick={() => setOpen(!open)}
            sx={{

                borderRadius: '10px',
                width: '20%',
                mt: '10px',
                color: '#19bb84',
                '&:hover': {
                    borderRadius: '10px',
                    borderColor: "#19bb84",
                    backgroundColor: '#1B2635',
                    boxShadow: "0 0 14px -4px #19bb84",
                }
            }}>
            Click me
        </Button>
        </Box>

    )
}

export default Header;