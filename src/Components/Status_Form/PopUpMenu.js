import { MoreVert } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { Box, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../Store/Actions/TodoActions";
// import { Update } from "@mui/icons-material";
import { openTaskDrawer } from "../../Store/Actions/TodoActions";

const PopUpMenu = ({ taskId }) => {
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
    console.log("Deleting task with id:", taskId);
    deleteTask(taskId, dispatch);
    handleCloseMenu();
  };
  const handleUpdateTask = () => {
    openTaskDrawer({ id: taskId, mode: "edit" }, dispatch);

    handleCloseMenu();
  };

  return (
    <Box>
      <MoreVert onClick={handleClick} sx={{ cursor: "pointer" }} />
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
          <MenuItem onClick={handleUpdateTask}>
            <UpdateIcon />
            updateTask
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};
export default PopUpMenu;
