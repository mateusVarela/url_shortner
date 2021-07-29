import React from 'react';
import Button from '@material-ui/core/Button';
import findData from '../services/urlRoute';

const data = { originalUrl: "https://www.youtube.com/watch?v=pg-oETA3Lnk&list=RD_cHrjX8l1c8&index=5" }
export default function button() {
    return (
        <Button variant="contained" color="primary" onClick={async () => await findData.getHomeList(data)} className="button-style" disableElevation>
            Gerar URL
        </Button>
    )
}