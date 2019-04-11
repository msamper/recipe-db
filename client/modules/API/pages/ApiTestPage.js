import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FastFoodIcon from '@material-ui/icons/FastFood';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';

const styles = theme => ({
  card: {
    maxWidth: 280,
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 15,
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
  content: {
    marginLeft: 15,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    width: '80%',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  fab: {
    margin: theme.spacing.unit * 2,
  },
});

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function randomValue() {
  const cuisineOptions = [
    { value: 'african', label: 'African' },
    { value: 'indian', label: 'Indian' },
    { value: 'french', label: 'French' },
    { value: 'british', label: 'British' },
    { value: 'italian', label: 'Italian' },
    { value: 'asian', label: 'Asian' },
    { value: 'thai', label: 'Thai' },
    { value: 'chinese', label: 'Chinese' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'vietnamese', label: 'Vietnamese' },
    { value: 'greek', label: 'Greek' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'diary', label: 'Diary' },
    { value: 'seafood', label: 'Seafood' },
    { value: 'pasta', label: 'Pasta' },
    { value: 'vegetable', label: 'Vegetable' },
    { value: 'egg', label: 'Egg' },
    { value: 'fish', label: 'Fish' },
    { value: 'beef', label: 'Beef' },
    { value: 'lamb', label: 'Lamb' },
    { value: 'pork', label: 'Pork' },
    { value: 'duck', label: 'Duck' },
    { value: 'chicken', label: 'Chicken' },
  ];
  return cuisineOptions[Math.floor(Math.random() * cuisineOptions.length)].value;
}

class RecipeReviewCard extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
      recipes: [],
      profile: {},
      open: false,
      modalOpenIndex: -1,
      title: '',
      query: '',
      q: 'chicken',
      diet: '',
      health: [],
      search: '',
      populateModal: 'fwefewfwe',
    };
  }

  componentWillMount() {
    const id = this.props.auth.user.id;
    axios.get(`/api/users/profile/${id}`)
      .then(res => {
        this.setState(
          { q: randomValue(), profile: res.data.user, diet: res.data.user.diet_type, health: res.data.user.diet_preferences },
          this.queryBuilder
          );
      });
  }

  queryBuilder() {
    // console.log(this.state.health.map(item => 'health=' + item).join('&'));
    const params = {
      q: this.state.q,
      app_id: '6e473dd6',
      app_key: '1e381d8a43e8a17308fe94b5e3e6d8cd',
      from: '0',
      to: '16',
      diet: this.state.diet,
      health: this.state.health,
    };
    const queryString = Object.keys(params).map(
      key => {
        if (key === 'health') {
          return this.state.health.map(item => 'health=' + item).join('&');
        } else {
          return key + '=' + params[key];
        }
      }).join('&');
    this.setState(
      { query: queryString },
      this.submitReq
      );
  }
  submitReq() {
    console.log(this.state.query);
    axios.get(`https://api.edamam.com/search?${this.state.query}`)
      .then(res => {
        // console.log(res);
        const list = res.data.hits.map(obj => obj.recipe);
        this.setState({ recipes: list });
        console.log(this.state.recipes);
      });
  }
  handleSearch = () => {
    this.setState(
      { q: this.state.search },
      this.queryBuilder
    );
  };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  handleOpen = () => {
    this.setState({ open: true });
    //this.setState({ populateModal: item });
  };
  handleClose = () => {
    this.setState({ open: false });
    //this.setState({ populateModal: {} });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  // populateModal = (index) => {
  //   if (this.state.recipes.length > 0 && this.state.modalOpenIndex !== -1) {
  //     this.setState({ title: this.state.recipes[index].label });
  //   }
  // };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <TextField
          fullWidth
          id="standard-name"
          label="Search"
          placeholder="Have something in mind?"
          className={classes.textField}
          value={this.state.search}
          onChange={this.handleChange('search')}
          margin="normal"
          variant="outlined"
        />
        <Fab color="primary" aria-label="Search" onClick={this.handleSearch} className={classes.fab}>
          <SearchIcon />
        </Fab>
        <Grid container spacing={8}>
            {this.state.recipes.map((item, index) => (
              <Grid item>
                <Card key={index} className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={item.image}
                    title={item.label}
                  />
                  <CardHeader
                    className={classes.title}
                    title={item.label}
                    subheader={`${Math.round(item.calories)} Cal / Yields ${item.yield}`}
                  />
                  <CardContent>
                    <Typography component="p">
                      <b>Diet Preferences: </b>{item.dietLabels.map(health => (
                      `${health}`
                    )).join(', ')}<br />
                      <b>Diet Restrictions: </b>{item.healthLabels.map(health => (
                        `${health}`
                      )).join(', ')}<br />
                      <Link href={item.url}>Check out this recipe</Link>
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="View nutrition details" onClick={this.handleOpen}>
                      <FastFoodIcon />
                    </IconButton>
                    <IconButton
                      className={classnames(classes.expand, {
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
                    <CardContent className={classes.content}>
                      <Typography paragraph><b>Ingredients:</b></Typography>
                      <Typography>
                        <ul>
                          {item.ingredientLines.map((ingredient, i) => (
                            <Typography paragraph key={i}>
                              <li>{ingredient}</li>
                            </Typography>
                          ))}
                        </ul>
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))}
        </Grid>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              {this.state.populateModal}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Fun nutrition info will go here in an easy to read table!
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(RecipeReviewCard);
