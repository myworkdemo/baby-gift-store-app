// material-ui
import { Link, Typography, Stack, Chip } from '@mui/material';
import { IconUser, IconUserCircle } from '@tabler/icons';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography
            variant="subtitle1"
            component={Link}
            href="https://www.linkedin.com/in/ramkrishna-sitap-56bb36147"
            target="_blank"
            underline="hover"
        >
            Developed by Ramkrishna Sitap
        </Typography>
        <Typography
            variant="subtitle1"
            component={Link}
            href="https://www.linkedin.com/in/ramkrishna-sitap-56bb36147"
            target="_blank"
            underline="hover"
        >
            <Chip icon={<IconUserCircle />} label="Visit Profile" />
        </Typography>
    </Stack>
);

export default AuthFooter;
