import { MoreVert } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { Box, Menu, MenuItem } from "@mui/material";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../Store/Actions/TodoActions";

const PopUpMenu = ({ taskId }) => {
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
  const handleDeleteTask = () => {
    deleteTask({ id: taskId }, dispatch);
    handleCloseMenu();
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
          <MenuItem onClick={handleDeleteTask}>
            <DeleteIcon />
            DeleteTask
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <UpdateIcon />
            updateTask
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};
export default PopUpMenu;
