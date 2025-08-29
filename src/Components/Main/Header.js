
import { Drawer, ListItem, ListItemText, List, Button } from "@mui/material";
const Header = (props) => {

    const { open, setOpen } = props;

    const handleSideber = () => {
        setOpen(true)
    }


    return (
        <div>
            <Button onClick={() => setOpen(!open)}
                sx={{
                    borderRadius: '10px',
                    backgroundColor: '#1B2635',
                    ml: '40%',
                    width: '20%',
                    mt: '10px',
                    '&:hover': {
                        borderRadius: '10px',
                        borderColor: "#4782da",
                        boxShadow: "0 0 14px -4px #4381da",
                    }
                }}>
                Click me
            </Button>
        </div>
    )
}

export default Header;