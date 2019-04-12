import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import compose from 'recompose/compose';
import withRoot from '../withRoot';

const styles = theme => ({
  card: {
    maxWidth: 400,
    marginTop: 80,
    marginBottom: 80,
    marginLeft: 30,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeCards extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };
  }
  state = { expanded: false };
  componentWillMount(){
    fetch('https://api.edamam.com/api/nutrition-details?app_id=6e473dd6&app_key=1e381d8a43e8a17308fe94b5e3e6d8cd')
      .then(response => response.json())
      .then(({ results: items }) => this.setState({ items }));
  }

  // console.log(results);

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const items = this.state.items;
    return (
      <div>
        {items.map(item =>
        <RecipeCards key={item.name} recipe={item} />)}

        {items.map(function(title, index){
          return <li key={index}>{title}</li>;
        })}
        <Card className={classes.card}>
          <CardHeader
            title={items.name}
            subheader={items.calories}
          />
          <CardMedia
            className={classes.media}
            image=""
            title=""
          />
          <CardContent>
            <Typography component="p">
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton
              className={classNames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph> </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

RecipeCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withRoot,
  withStyles(styles),
)(RecipeCards);
