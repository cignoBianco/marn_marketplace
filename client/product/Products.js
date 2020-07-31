import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import {Link} from 'react-router-dom'
import AddToCart from './../cart/AddToCart'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
    textAlign: 'left',
    padding: '0 8px'
  },
  container: {
    minWidth: '100%',
    paddingBottom: '14px'
  },
  gridList: {
    width: '100%',
    minHeight: 200,
    padding: '16px 0 10px'
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
    width: '100%'
  },
  tile: {
    textAlign: 'center'
  },
  image: {
    height: '100%'
  },
  tileBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.72)',
    textAlign: 'left'
  },
  tileTitle: {
    fontSize:'1.1em',
    marginBottom:'5px',
    color:'rgb(189, 222, 219)',
    display:'block'
  }
}))

export default function Products(props){
  const classes = useStyles()
    return (
      <div className={classes.root}>
      {props.products.length > 0 ?
        (<div className={classes.container}>

{props.products.map((product, i) => (

<div className="product-detail-container">
                
    <div className="product-detail">
      <div className="product-detail-content">
          <div className="image-container">
            
            <app-img-ssr><img className="  ng-lazyloaded" src={'/api/product/image/'+product._id} alt="Pizza Grande de Mussarela" title="Pizza Grande de Mussarela"/></app-img-ssr>
            
          </div>
          <div className="content-container">
          <a href={'/product/'+product._id}>
            <h3 className="product-name">{product.name}</h3>
          </a>
            <p className="product-description f-caption-2"> {product.description} </p>
            <div className="price-add-continer">
                <div className="prices-container">
                  <span className="product-price f-caption-1">{product.price} </span>
                </div>
                  <AddToCart  item={product}/>
                
            </div>
          </div>
      </div>
    </div>

</div> ))}

          </div>) : props.searched && (<Typography variant="subheading" component="h4" className={classes.title}>No products found! :(</Typography>)}
      </div>)
}
Products.propTypes = {
  products: PropTypes.array.isRequired,
  searched: PropTypes.bool.isRequired
}
