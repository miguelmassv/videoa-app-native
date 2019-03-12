import React, {Component} from 'react';
import {Text,} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import Loader from "./src/loader/components/loader";
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list.js';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
    loading: true,
  }
  async componentDidMount() {
  const movies = await API.getSuggestion(10);
  const categories = await API.getMovies();
  console.log(movies);
  this.setState({
    suggestionList: movies,
    categoryList: categories,
    loading: false,
  })
  console.log(categories);

}
  render() {
    return (
  <Home>

    <Header>
      <Text>Miguel Dev</Text>
    </Header>
    {/* <Video
      source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
    /> */}
    <Text>buscador</Text>
    <Text>categorías</Text>
    <CategoryList
      list={this.state.categoryList}
    />
    {this.state.loading ? (
      <Loader />
    ) : (
      <SuggestionList list={this.state.suggestionList} />
    )}
  </Home>
    );
  }
}
