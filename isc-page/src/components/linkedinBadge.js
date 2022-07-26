import React from 'react';
import { Paper, Grid } from '@material-ui/core'

const LinkedInBadge = ({ user, theme }) => {
    return (
        <Grid component={Paper}
            item
            elevation = {0}
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme={theme}
            data-type="VERTICAL"
            data-vanity={user}
            data-version="v1"
            xs={12}
            sm={3}
            md={3}
            style={{ display: "table-cell", padding: "0.5rem", backgroundColor: "rgb(218, 216, 216)" }}
        >
        </Grid>
    );
}

export default LinkedInBadge;