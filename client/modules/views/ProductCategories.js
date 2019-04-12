import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import LayoutBody from '../../components/LayoutBody';
import Typography from '../../components/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },
  images: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://www.averiecooks.com/wp-content/uploads/2018/04/butterchicken-11.jpg',
      title: 'Indian',
      width: '40%',
    },
    {
      url:
        'https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/06/26/14/arigoldburger.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
      title: 'American',
      width: '20%',
    },
    {
      url:
        'https://images.tienda.com/is/image/LaTienda/mixed-seafood-paella?&wid=1087',
      title: 'Spanish',
      width: '40%',
    },
    {
      url:
        'https://heatherchristo.com/wp-content/uploads/2014/01/Spicy-Thai-Curry-Soup-from-HeatherChristo.com_.jpg',
      title: 'Thai',
      width: '38%',
    },
    {
      url:
        'https://www.azamaraclubcruises.com/sites/default/files/heros/japan-food-blog-hero.jpg',
      title: 'Japanese',
      width: '38%',
    },
    {
      url:
        'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/155841402.jpg?itok=M7v4Sy3t',
      title: 'Russian',
      width: '24%',
    },
    {
      url:
        'https://kiskametals.com/wp-content/uploads/2018/12/italian-food-bbcgoodfoodmecom.png',
      title: 'Italian',
      width: '40%',
    },
    {
      url:
        'http://www.upmixed.com/wp-content/uploads/2019/02/UpMixed-french-food-favorite-traditional-meals-french-cuisine.png',
      title: 'French',
      width: '20%',
    },
    {
      url:
        'https://static01.nyt.com/images/2018/01/22/dining/22COOKING-OXTAILSTEW/22COOKING-OXTAILSTEW-articleLarge.jpg',
      title: 'Jamaican',
      width: '40%',
    },
  ];

  return (
    <LayoutBody className={classes.root} component="section" width="large">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Discover food from around the world
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </LayoutBody>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
