import React from 'react';
import Button from '@material-ui/core/Button';
import '../app.css';

export default function button() {
    return (
        <Button variant="contained" color="primary" className="button-style" disableElevation>
            Gerar URL
        </Button>
    )
}