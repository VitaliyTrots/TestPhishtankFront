import React, { useState } from "react"
import { useHistory } from "react-router"
import { Input, Button } from "@material-ui/core"

import {default as appConfig} from "../../config"

import MainLayout from "../../components/MainLayout"

import { useStyles } from "./styles"

export default function TestURL({ onFetch }) {
  const [searchURL, setSearchURL] = useState("")
  const history = useHistory()
  const classes = useStyles()

  const onChange = event => {
    if (event.nativeEvent.inputType === "deleteContentBackward") {
      setSearchURL(searchURL.slice(0, searchURL.length - 1))
    } else if (event.nativeEvent.data !== null) {
      setSearchURL(searchURL + event.nativeEvent.data)
    }
  }

  const handleButton = async () => {
    const response = await fetch(appConfig.baseUrl + "check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: searchURL })
    })
    onFetch(await response.json())
    history.push("/dashboard")
  }

  return (
    <MainLayout activeMenuItem="/">
      <div className={classes.container}>
        Enter URL:
        <Input
          placeholder="www.google.com"
          value={searchURL}
          onChange={onChange}
        />
        <Button
          variant="contained"
          onClick={handleButton}
          className={classes.firstBtn}
        >
          Check URL
        </Button>
      </div>
    </MainLayout>
  )
}
