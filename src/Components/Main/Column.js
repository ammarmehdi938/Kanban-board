import { Box } from "@mui/material";
import Title from "./Title";
import ColorPicker from "./ColorPicker";

const column = () => {

    return (
        <Box sx={{
            // backgroundColor: '#1B2635',
            // height:'100%',
            // border:'2px solid #19bb84',
            // borderRadius: '10px',
            // overflowY: 'auto',
        }}>

            <Title />

            <ColorPicker />
            

        </Box>
    )
}
export default column;