import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    DataGrid,
    GridToolbar,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarDensitySelector,
    GridToolbarExport
} from '@mui/x-data-grid';

import PropTypes from 'prop-types';
import { Pagination, Box, Paper, Popper, Typography } from '@mui/material';
import { useRef, useState, useEffect } from 'react';

export function SortedDescendingIcon() {
    return <ExpandMoreIcon className="icon" />;
}

export function SortedAscendingIcon() {
    return <ExpandLessIcon className="icon" />;
}

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <GridToolbarDensitySelector />
            <GridToolbarExport
                printOptions={{
                    hideFooter: true,
                    hideToolbar: true
                }}
                csvOptions={{
                    fileName: 'BabyGiftStore - Purchase Product List'
                }}
            />
        </GridToolbarContainer>
    );
}

const CustomDataTable = ({ ...props }) => {
    const [columnVisibilityModel, setColumnVisibilityModel] = useState({
        id: false
    });
    const [pageSize, setPageSize] = useState(5);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                columns={props.columns}
                rows={props.rows}
                components={{
                    Toolbar: CustomToolbar
                }}
                sx={{
                    '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus, &.Button:focus': {
                        outline: 'none'
                    },
                    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
                        borderRight: `2px solid ${'#f0f0f0'}`,
                        borderBottom: `2px solid ${'#f0f0f0'}`
                    },
                    '& .super-app-theme--header': {
                        backgroundColor: 'rgba(58, 119, 246, 0.8)',
                        color: 'white'
                    }
                }}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 20, 50, 100]}
                pagination
                columnVisibilityModel={columnVisibilityModel}
                onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
                disableSelectionOnClick
            />
        </div>
    );
};

/*
---------------------------#####################################---------------------------
---------------------------###### Custom renderCellExpand ######---------------------------
---------------------------#####################################---------------------------
*/

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

function GridCellExpand(props) {
    const { width, value } = props;
    const wrapper = useRef(null);
    const cellDiv = useRef(null);
    const cellValue = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [showFullCell, setShowFullCell] = useState(false);
    const [showPopper, setShowPopper] = useState(false);

    const handleMouseEnter = () => {
        const isCurrentlyOverflown = isOverflown(cellValue.current);
        setShowPopper(isCurrentlyOverflown);
        setAnchorEl(cellDiv.current);
        setShowFullCell(true);
    };

    const handleMouseLeave = () => {
        setShowFullCell(false);
    };

    useEffect(() => {
        if (!showFullCell) {
            return undefined;
        }

        function handleKeyDown(nativeEvent) {
            // IE11, Edge (prior to using Bink?) use 'Esc'
            if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
                setShowFullCell(false);
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [setShowFullCell, showFullCell]);

    return (
        <Box
            ref={wrapper}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                alignItems: 'center',
                lineHeight: '24px',
                width: 1,
                height: 1,
                position: 'relative',
                display: 'flex'
            }}
        >
            <Box
                ref={cellDiv}
                sx={{
                    height: 1,
                    width,
                    display: 'block',
                    position: 'absolute',
                    top: 0
                }}
            />
            <Box ref={cellValue} sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {value}
            </Box>
            {showPopper && (
                <Popper open={showFullCell && anchorEl !== null} anchorEl={anchorEl} style={{ width, marginLeft: -17 }}>
                    <Paper elevation={1} style={{ minHeight: wrapper.current.offsetHeight - 3 }}>
                        <Typography variant="body2" style={{ padding: 8 }}>
                            {value}
                        </Typography>
                    </Paper>
                </Popper>
            )}
        </Box>
    );
}

GridCellExpand.propTypes = {
    value: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired
};

function renderCellExpand(params) {
    return <GridCellExpand value={params.value || ''} width={params.colDef.computedWidth} />;
}

renderCellExpand.propTypes = {
    /**
     * The column of the row that the current cell belongs to.
     */
    colDef: PropTypes.object.isRequired,
    /**
     * The cell value, but if the column has valueGetter, use getValue.
     */
    value: PropTypes.string
};

export { CustomDataTable, renderCellExpand };
