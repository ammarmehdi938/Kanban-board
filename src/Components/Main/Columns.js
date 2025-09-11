import { Box, Button } from "@mui/material"
import TaskCard from "./TaskCard";
import { useState } from "react";
import Column from "./Column";

const Columns = (props) => {
    const { columns, data, updateTodo } = props;
    const [count, setCount] = useState(0);
    return (
        <Box sx={{
            // height: '100%',
            display: 'flex',
            gap: 2,
            marginLeft: '15px',
            color: '#ffffff',
            overflowX: 'auto',


        }}>
            {columns.map((item) => {
                const columnData = data.filter((dataItem) => dataItem.status === item.key);
                return (
                    <Box>
                        <Box sx={{
                            backgroundColor: '#1B2635',
                            borderRadius: '10px',
                            padding: '4px',
                            border: '2px solid #19bb84',
                            boxShadow: '0px 0px 4px #19bb84',
                            width: '250px',
                            minWidth: '200px',
                            // borderRadius: '10px',
                            display: 'block',
                            padding: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: 'auto',
                            minHeight: '100%',
                            marginBottom: '10px',
                            boxSizing: 'border-box'
                        }}>
                            <span display='inline'>
                                {item.label}
                                {/* {<Badge badgeContent={4} color="primary">
                            {columnData.length}
                        </Badge>} */}
                                <Button sx={{
                                    height: '5px', minWidth: '8px', backgroundColor: '#1B2635',
                                    color: '#ffffff', border: '2PX solid #19AD7A', ml: '5px'
                                }}>
                                    {columnData.length}
                                </Button>
                            </span>
                            {columnData.length ?
                                columnData.map((item, index) => {
                                    return <TaskCard data={data} item={item} updateTodo={updateTodo} />
                                }) : 'No Task Found'
                            }

                        </Box>
                    </Box>
                )
            })}

            <Box
                sx={{
                    backgroundColor: '#1B2635',
                    height: '100%',
                    border: '2px solid #19bb84',
                    borderRadius: '10px',
                    overflowY: 'auto',
                }}>
                <Column />
            </Box>
        </Box>
    )
}
export default Columns; 