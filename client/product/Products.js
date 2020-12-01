import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import {Link} from 'react-router-dom'
import AddToCart from './../cart/AddToCart'
import Add from './../assets/images/icons/Add.png'
import img from './../../public/api/reduction/image/3d203d30-63ba-11e8-8f7d-00155dd9fd01.jpg'
import Pagination from "react-js-pagination";
//import './styleProducts.css'

const useStyles = makeStyles(theme => ({
  root: {
    //display: 'flex',
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
  },
  container: {
    marginLeft: theme.basic.outerMargins,
    marginRight: theme.basic.outerMargins,
}, 
bold: {
    fontWeight: 800,
},
h1: {
    marginTop: 20,
    marginBottom: 28,
    fontSize: 32,
    fontWeight: 800,
    paddingLeft: '3em'
},
category: {
    width: '100%',
    borderBottom: '1px solid rgba(121, 121, 121, 0.25)',
    height: 32,
    textalign: '-webkit-center'
},
categories: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    width: 444,
    justifyContent: 'space-between',
    height: 24,
    paddingLeft: '6em'
},
cat: {
    fontSize: 24,
},
activeTab: {
    borderBottom: '6px solid #B0CB1F;',
},
parent: {
    display: 'grid',
    gridTemplateColumns: '2fr 4fr',
    marginTop: 50,
    marginBottom: 60,
},
filter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 380,
    height: 662,
},
card: {
    position: 'static',
   // width: 305,
    maxHeight: 814,
    minHeight: 321,
    height: '100%',
    left: 0,
    top: 0,
    flex: 'none',
    order: 0,
    alignSelf: 'center',
    flexGrow: 0,
    width: 345,
    //margin: '36px 0px',
   // border: '1px solid black',
    overflow: 'hidden',
    borderRadius: 20,
    boxShadow: '0px 2px 4px rgba(117, 131, 142, 0.04), 0px 8px 16px rgba(52, 60, 68, 0.1)',
    '&:hover': {
        marginTop: 4,
        boxShadow: '0px 4px 8px rgba(51, 38, 49, 0.3)',
        transition: 'all 0.1s ease-out'
    }
},
grid: {
    display: 'grid',
    //gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gridGap: '40px 36px',
   // border: '1px solid black',
    gridTemplateColumns: 'repeat( auto-fill, minmax(310px, 1fr) )',
    width: 'inherit',
    gridAutoFlow: 'row dense',
    height: 721,
    overflowY: 'hidden',
    paddingLeft: theme.basic.lightPadding,
    paddingRight: theme.basic.lightPadding,
},
cardStatusDiv: {
    boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.1)',
    height: 50,
    width: 92,
},
cardStatus: {
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 12,
    color: theme.palette.primary.text,
    paddingLeft: 22,
    paddingTop: 12,
},
suggestionsDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    minHeight: 225,
    //border: '1px solid black',
    margin: '50px 0'
},
greenBg: {
    backgroundColor: theme.palette.primary.accent,
},
noRepeatCenter: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
},
h4: {
    fontSize: 18,
    textShadow: '0 0 black',
    fontWeight: 300
},
description16: {
    fontSize: 16,
    color: '#797979'
},
aboutBlock: {
    maxWidth: 1440,
    maxHeight: 652,
    margin: '30px 1em',
},
Icon: {
    backgroundSize: '60%',
    height: 181,
    width: 175
},

bold: theme.bold,
radioGroup: {
    display: 'grid',
    borderBottom: '1px solid lightgrey',
    height: 52,
    width: '100%',
    alignContent: 'center',
    gridGap: 15
},
greenHat: {
    width: 380,
    height: 50,
    backgroundColor: theme.palette.primary.accent,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
},
radioLabel: {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gridGap: 15,
    alignItems: 'center'
},
Button2: {
    height: 44,
    width: 250,
    padding: '7px 40px',
    borderColor: theme.palette.primary.accent,
    borderRadius: theme.basic.borderRadius,
    fontSize: 20,
    margin: '40px 0',
    alignSelf: 'center',
    /* text-align-last: center; */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //#B0CB1F
    "&:hover": {
        boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.3)'
      },
},
hat: {
    height: 255,
    display: 'grid',
    gridTemplateColumns: '250px 1fr',
    gridGap: 40,
    marginLeft: '6em',
    marginRight: '6em',
    alignItems: 'center'
},
searchbar: {
    height: 50,
    width: 380,
    backgroundColor: '#fbfbfb',
    boxShadow: 'inset 0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.basic.borderRadius,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',

},
add: {
  backgroundImage: `url(${Add})`,
  width: 53,
  height: 46,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  position: 'absolute',
  borderRadius: '50%',
  marginLeft: '17em',
  marginTop: '-0.5em'
},

filter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 380,
    height: 662,
},
card: {
    position: 'static',
   // width: 305,
    maxHeight: 814,
    minHeight: 321,
    left: 0,
    top: 0,
    flex: 'none',
    order: 0,
    alignSelf: 'center',
    flexGrow: 0,
    width: 345,
    //margin: '36px 0px',
   // border: '1px solid black',
    overflow: 'hidden',
    borderRadius: 20,
    boxShadow: '0px 2px 4px rgba(117, 131, 142, 0.04), 0px 8px 16px rgba(52, 60, 68, 0.1)',
    '&:hover': {
        marginTop: 4,
        boxShadow: '0px 4px 8px rgba(51, 38, 49, 0.3)',
        transition: 'all 0.1s ease-out'
    }
},
grid: {
    display: 'grid',
    //gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gridGap: '40px 36px',
   // border: '1px solid black',
    gridTemplateColumns: 'repeat( auto-fill, minmax(310px, 1fr) )',
    width: 'inherit',
    gridAutoFlow: 'row dense',
    height: 721,
    overflowY: 'hidden',
    paddingLeft: theme.basic.lightPadding,
    paddingRight: theme.basic.lightPadding,
},
cardStatusDiv: {
    boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.1)',
    height: 50,
    width: 92,
},
cardStatus: {
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 12,
    color: theme.palette.primary.text,
    paddingLeft: 22,
    paddingTop: 12,
},
suggestionsDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    minHeight: 225,
    //border: '1px solid black',
    margin: '50px 0'
},
greenBg: {
    backgroundColor: theme.palette.primary.accent,
},
noRepeatCenter: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
},
h4: {
    fontSize: 18,
    textShadow: '0 0 black',
    fontWeight: 300
},
description16: {
    fontSize: 16,
    color: '#797979'
},
aboutBlock: {
    maxWidth: 1440,
    maxHeight: 652,
    margin: '30px 1em',
},
Icon: {
    backgroundSize: '60%',
    height: 181,
    width: 175
},
bold: theme.bold,
radioGroup: {
    display: 'grid',
    borderBottom: '1px solid lightgrey',
    height: 52,
    width: '100%',
    alignContent: 'center',
    gridGap: 15
},
greenHat: {
    width: 380,
    height: 50,
    backgroundColor: theme.palette.primary.accent,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
},
radioLabel: {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gridGap: 15,
    alignItems: 'center'
},
Button2: {
    height: 44,
    width: 250,
    padding: '7px 40px',
    borderColor: theme.palette.primary.accent,
    borderRadius: theme.basic.borderRadius,
    fontSize: 20,
    margin: '40px 0',
    alignSelf: 'center',
    /* text-align-last: center; */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //#B0CB1F
    "&:hover": {
        boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.3)'
      },
},
hat: {
    height: 255,
    display: 'grid',
    gridTemplateColumns: '250px 1fr',
    gridGap: 40,
    marginLeft: '6em',
    marginRight: '6em',
    alignItems: 'center'
},
searchbar: {
    maxWidth: 378,
    height: 50,
    backgroundColor: '#fbfbfb',
    boxShadow: 'inset 0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.basic.borderRadius,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',

    height: 50,
    width: 380,

},
mg12: {
  marginLeft: 12
},
placeholder: {
fontSize: 15,
color: '#797979',
paddingLeft: 10,
height: '100%',
width: '100%',
background: 'none',
border: 'none',
outline: 'none',
},

}))
// <AddToCart item={product}/>
const ima = './../../public/api/reduction/image/120b46d3-5f32-11e8-8f7d-00155dd9fd01.jpg'
export default function Products(props){
  
  const classes = useStyles()
  const shopId = props.shopId

  const todosPerPage = 4;
    const [ activePage, setCurrentPage ] = useState( 1 );
    // Logic for displaying current todos
    const indexOfLastTodo  = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos     = props.products.slice( indexOfFirstTodo, indexOfLastTodo );
    const handlePageChange = ( pageNumber ) => {
      console.log( `active page is ${ pageNumber }` );
      setCurrentPage( pageNumber )
   };

   const renderTodos = currentTodos.map( ( product, i ) => {
    return props.products.length > 0 ?
      (
       
            <div className={classes.card} onClick={() => {showThisCard(); console.log('i')}} key={i}>
              <Link to={"/product/"+product._id}>
              
                {console.log("f:", product.image )}
               <img src={img} width='72%' />
              
                
              </Link> 
              <div className={classes.add}></div>
              <div style={{height: 100, paddingLeft: 20, paddingTop: 20, display: 'grid', alignItems: 'end'}}>
                <Link to={"/product/"+product._id}>
                  <div style={{fontSize: 18, fontWeight: 400, textShadow: '0 0 black', paddingBottom: 14}}>{product.name}</div>
                </Link>
                <div style={{fontSize: 12, paddingBottom: 15}}>{product.description}</div>
                  <div style={{display: 'grid', gridTemplateColumns: '5fr 1fr', alignItems: 'flex-start', alignSelf: 'end'}}>
                      <div style={{ fontWeight: 400, fontSize: 32, width: 135, display: 'flex', alignItems: 'center' }}>
                          {product.price}
                          <span style={{color: '#797979', textDecorationLine: 'line-through', paddingLeft: 10, fontSize: 18}}>{product.price}</span>
                      </div>
                      <div style={{ width: 80, height: 50}} className={classes.greenBg}>
                          <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
                              height: 'inherit'}}> 2 по цене 1
                          </p>
                      </div>
                  </div>
                </div>
      </div>) : props.searched && (<Typography variant="subheading" component="h4" className={classes.title}>No products found! :(</Typography>)
  
        }
  );



    return (
<>
<div className={classes.grid}>
{renderTodos}
</div>
      
        <div></div>
        <div className="pagination">
            <Pagination
               activePage={ activePage }
               itemsCountPerPage={ 4 }
               totalItemsCount={ props.products.length }
               pageRangeDisplayed={ 4 }
               onChange={ handlePageChange }
            />
         </div>
     </> )
}
Products.propTypes = {
  products: PropTypes.array.isRequired,
  searched: PropTypes.bool.isRequired
}
