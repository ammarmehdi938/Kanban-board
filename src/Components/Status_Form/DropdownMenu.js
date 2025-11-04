import { MoreVert } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { Box, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteStatus } from "../../Store/Actions/TodoActions";
import StatusForm from "./statusForm";

const DropdownMenu = ({ taskId }) => {
  //   const [taskId] = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleDeleteColumn = () => {
    deleteStatus(taskId, dispatch);
    handleCloseMenu();
  };
  const handleUpdateColumn = () => {
    
  };
  return (
    <Box>
      <MoreVert onClick={handleClick} />
      <Box sx={{ backgroundColor: "#1B2635" }}>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          slotProps={{
            list: {
              "aria-labelledby": "basic-button",
            },
          }}
        >
          <MenuItem onClick={handleDeleteColumn}>
            <DeleteIcon />
            Delete
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <UpdateIcon />
            update
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};
export default DropdownMenu;
