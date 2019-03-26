import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
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
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
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
		'https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/10/1520634597-vegan-buddha-bowl.jpg',
        //'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80',
      title: 'Vegan',
      width: '40%',
    },
    {
      url:
		'https://www.verywellhealth.com/thmb/F--hSAn6C6LLRpxVdPGTYEZ7cYY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/grain-bowl-with-peanut-sauce-836223186-5a72358a43a1030037ddba4c.jpg',
        //'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80',
      title: 'Vegetarian',
      width: '30%',
    },
    {
      url:
        'https://www.dietdoctor.com/wp-content/uploads/2017/09/DD-508EggBaconPlate.jpg',
		//'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80',
      title: 'Ketogenic',
      width: '30%',
    },
    {
      url:
        'https://i2.wp.com/hedonistshedonist.com/wp-content/uploads/2018/02/SPICY-GARLIC-LIME-CHICKEN-WITH-ROASTED-PEPPERS-AND-SWEET-POTATO-WEDGES-edited-small.jpg?resize=800%2C533',
		//'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80',
      title: 'Kosher',
      width: '30%',
    },
    {
      url:
        'https://i0.wp.com/www.paleonewbie.com/wp-content/uploads/2016/03/paleo-newbie-shrimp-sausage-skillet-recipe-366x300.jpg?resize=366%2C300',
		//'https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400&q=80',
      title: 'Paleo',
      width: '30%',
    },
    {
      url:
        'https://minimalistbaker.com/wp-content/uploads/2016/07/The-Ultimate-Mediterranean-Bowl-SQUARE.jpg',
		//'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400&q=80',
      title: 'Mediterranean',
      width: '30%',
    },
    {
      url:
        'https://www.soulintheraw.com/wp-content/uploads/2017/11/Mexican-bowl1234-min-web-1080x1015-300x282.jpg',
		//'https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400&q=80',
      title: 'Raw Foods',
      width: '30%',
    },
    {
      url:
        'https://content.southbeachdiet.com/images/sbd/rate-plan/04272017-typ-day-mobile.jpg',
		//'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400&q=80',
      title: 'South Beach',
      width: '30%',
    },
    {
      url:
        'https://www.healthline.com/hlcmsresource/images/AN_images/AN4-Salmon-low-carb-732x549-Thumbnail.jpg',
		//'https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80',
      title: 'Atkins',
      width: '30%',
    },
  ];

  return (
    <LayoutBody className={classes.root} component="section" width="large">
      <Typography variant="h4" marked="center" align="center" component="h2">
        For all tastes and all desires
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
