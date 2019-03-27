import React, { Component } from 'react';
import axios from 'axios';

class FetchDemo extends Component {
  state = {
    recipes: [],
  };

  componentDidMount() {
    axios.get('https://api.edamam.com/search', {
      params: {
        app_id: '6e473dd6',
        app_key: '1e381d8a43e8a17308fe94b5e3e6d8cd',
        q: 'chicken',
        from: '0',
        to: '3',
      },
    })
      .then(res => {
        const recipes = res.data.hits.map(obj => obj.recipe);
        this.setState({ recipes });
      });
  }
  render() {
    const list = this.state.recipes.map((recipe, index) => {
      return (
        <tr key={index}>
          <td>{recipe.label}</td>
          <td>{recipe.calories}</td>
          <td><img src={recipe.image} /></td>
        </tr>
      );
    });
    return (
      <div>
        <h1>{'Here is some fud for u'}</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Recipe</th>
              <th>Calories</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
          {list}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FetchDemo;
