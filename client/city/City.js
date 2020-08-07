import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Icon from '@material-ui/core/Icon'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    /*background: theme.palette.background.paper,*/
  },
  gridList: {
    flexWrap: 'nowrap',
    width:'100%',
    transform: 'translateZ(0)',
  },
  tileTitle: {
    verticalAlign: 'middle',
    lineHeight: 2,
    textAlign: 'center',
    fontSize: '1.35em',
    margin: '0 4px 0 0',
  },
  card: {
    margin: 'auto',
    marginTop: 20
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    /*color: theme.palette.openTitle,
    backgroundColor: '#80808024',*/
    fontSize: '1.1em'
  },
  title2: {
      color: 'orange'
  },
  icon: {
    verticalAlign: 'sub',
    /*color: '#738272',*/
    fontSize: '0.9em'
  },
  link: {
    color: '#4d6538',
    textShadow: '0px 2px 12px #ffffff',
    cursor:'pointer'
  }
}))

export default function City(){

    return (
      <div class="pt-75">
          <div>
        city</div>
      </div>
    )
  
  
}
