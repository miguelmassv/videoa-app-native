import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from '../components/suggestion-list-layout.js';
import Empty from '../components/empty.js';
import Separator from '../components/vertical-separator.js';
import Suggestion from '../components/suggestion.js';

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString()
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <Separator />
  // itemSeparator = () => <Separator color="red" />
  renderItem = ({item}) => {
      return (
        <Suggestion {...item}/>
      )
    }
  render() {

    return (
      <Layout
        title="Recomendado para ti"
      >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

export default SuggestionList
