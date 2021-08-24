import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEM':
      return {...state, item: state.carousels[state.actualIndex]}
    case 'GET_NEXT_ITEM':
      return {
        ...state, 
        actualIndex: state.actualIndex + 1, 
        item: state.carousels[state.actualIndex + 1],
        last: (state.carousels.length - 1) === (state.actualIndex + 1),
        first: false
      }
    case 'GET_PREV_ITEM':
      return {
        ...state,
        actualIndex: state.actualIndex - 1,
        item: state.carousels[state.actualIndex - 1],
        first: (state.actualIndex - 1) === 0,
        last: false,
      }
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
