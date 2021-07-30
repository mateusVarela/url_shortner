import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ReactDOM from 'react-dom'
import { Input } from '@material-ui/core'
import findData from '../services/urlRoute'
import './form.css'

type algumaCoisa = {
  originalUrl?: string
}

async function newUrlShort(data: algumaCoisa) {
  if (data.originalUrl && data.originalUrl !== '') {
    console.log(data)
    const urlRequest = await findData.getUrlShort(data)
    const element = (
      <p className="organize-short-url">{urlRequest.newUrl.data.USER_URL}</p>
    )
    ReactDOM.render(element, document.getElementById('show-url'))
  }
}

export default function FormUrl() {
  const [urlValue, setUrlValue] = useState('')
  const data = { originalUrl: `${urlValue}` }

  return (
    <div className="organize-form">
      <form noValidate autoComplete="off">
        <Input
          style={{ width: '450px' }}
          id="standard-basic"
          onChange={e => setUrlValue(e.currentTarget.value)}
        />
      </form>
      <Button
        variant="contained"
        color="primary"
        onClick={async () => newUrlShort(data)}
        className="button-style"
        disableElevation
      >
        Gerar URL
      </Button>
      <div className="short-url" id="show-url"></div>
    </div>
  )
}
