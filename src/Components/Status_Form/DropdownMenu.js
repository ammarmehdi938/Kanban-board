import { MoreVert } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { Box, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteStatus } from "../../Store/Actions/TodoActions";

const DropdownMenu = ({ taskId }) => {
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
  const handleUpdateColumn = () => {};
  return (
    <Box
      sx={{
        cursor: "pointer",
        position: "relative",
        zIndex: 1000,
        pointerEvents: "auto",
      }}
      onMouseDown={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <MoreVert
        draggable={false}
        onClick={(e) => {
          e.stopPropagation();
          handleClick(e);
        }}
        sx={{ draggable: false, cursor: "pointer" }}
      />
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
