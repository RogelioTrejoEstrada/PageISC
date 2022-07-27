import React from 'react';
import { Paper, Grid } from '@material-ui/core'

const LinkedInBadge = ({ user, theme }) => {
    return (
        <Grid component={Paper}
            item
            elevation = {0}
            className="LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme={theme}
            data-type="HORIZONTAL"
            data-vanity={user}
            data-version="v1"
            xs={12}
            md={2}
            // style={{ display: "table-cell", padding: "1%",
            //     backgroundColor: "rgb(218, 216, 216)"}}
            style={{
                backgroundColor: "rgb(218, 216, 216)"}}
        >
        </Grid>
    );
}

export default LinkedInBadge;