import React, {useState}  from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    hr: {
        marginBottom: 20
    }
  }))

export default function Sidebar() {
    const classes = useStyles()
    return (
        <hr className={classes.hr}/>
    )
}