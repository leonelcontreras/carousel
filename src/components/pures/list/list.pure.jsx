import React from 'react'
import { FlatList, View, Text } from 'react-native'
import ListItemPure  from '../list-item/list-item.pure'
import styles from './list.style'

const ListPure = ({data, attribute}) => {
  console.log('key -->', attribute)
  return (
    <FlatList
      pagingEnabled
      shoe
      horizontal
      style={styles.list}
      data={data}
      keyExtractor={x => String(x.id)}
      renderItem={({item}) => {
        return (
          <ListItemPure item={item} key={item.id}/>
        )
      }}
    />
  )
}

export default ListPure
