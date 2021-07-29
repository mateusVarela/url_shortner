import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';

export default function InputTest() {
  const [playerName, setPlayerName] = useState('')
  return (
    < form noValidate autoComplete="off" >
      <Input id="standard-basic" onChange={e => setPlayerName(e.currentTarget.value)} label="URL" />
    </form >
  )
}