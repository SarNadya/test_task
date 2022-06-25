import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function OnLoadingPostsData(Component) {
    return function LoadingPostsData({isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />
        else return (
            <Box sx={{height: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h3> Подождите, идет загрузка... </h3>
                <CircularProgress size={70} disableShrink />
            </Box>
        )
    }
}

export default OnLoadingPostsData;