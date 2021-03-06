import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CAROUSEL } from '../action-types'

const initialState = {
  item: {},
  first: true,
  last: false,
  actualIndex: 0,
  carousels: [
    {
      id: 1,
      title: "The lovers of food",
      images: [
        'https://source.unsplash.com/collection/190727/800x600',
        'https://source.unsplash.com/collection/190727/800x600',
        'https://source.unsplash.com/collection/190727/800x600',
        'https://source.unsplash.com/collection/190727/800x600'
      ]
    },
    {
      id: 2,
      title: "Working from home",
      images: [
        'https://source.unsplash.com/collection/190728/800x600',
        'https://source.unsplash.com/collection/190728/800x600',
        'https://source.unsplash.com/collection/190728/800x600',
        'https://source.unsplash.com/collection/190728/800x600'
      ]
    },
    {
      id: 3,
      title: "Wild Life",
      images: [
        'https://source.unsplash.com/collection/190726/800x600',
        'https://source.unsplash.com/collection/190726/800x600',
        'https://source.unsplash.com/collection/190726/800x600',
        'https://source.unsplash.com/collection/190726/800x600'
      ]
    },
    {
      id: 4,
      title: "Enjoy life",
      images: [
        'https://source.unsplash.com/collection/190725/800x600',
        'https://source.unsplash.com/collection/190725/800x600',
        'https://source.unsplash.com/collection/190725/800x600',
        'https://source.unsplash.com/collection/190725/800x600'
      ]
    },
    {
      id: 5,
      title: "Color palette",
      images: [
        'https://source.unsplash.com/collection/190723/800x600',
        'https://source.unsplash.com/collection/190723/800x600',
        'https://source.unsplash.com/collection/190723/800x600',
        'https://source.unsplash.com/collection/190723/800x600'
      ]
    }
  ]
}

const getActualItem = (state, position) => {
  const actualIndex = state.actualIndex + position
  const item = state.carousels[actualIndex]
  const last = (state.carousels.length - 1) === actualIndex
  const first = actualIndex === 0

  return {
    ...state,
    actualIndex,
    item,
    first,
    last
  }
}

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAROUSEL.GET_ITEM:
      return {...state, item: state.carousels[state.actualIndex]}
    case CAROUSEL.GET_NEXT_ITEM:
      return getActualItem(state, 1)
    case CAROUSEL.GET_PREV_ITEM:
      return getActualItem(state, -1)
    default:
      return state
  }
}

const persistConfig = {
  key: 'carousel',
  storage: AsyncStorage,
  whitelist: ['item', 'first', 'last', 'actualIndex']
}

export default persistReducer(persistConfig, carouselReducer)
