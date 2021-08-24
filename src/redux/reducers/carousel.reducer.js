const initialState = [
    {
      id: 1,
      title: "First Block",
      images: [
        'https://source.unsplash.com/collection/190727/1600x900',
        'https://source.unsplash.com/collection/190727/1600x900',
        'https://source.unsplash.com/collection/190727/1600x900',
        'https://source.unsplash.com/collection/190727/1600x900'
      ]
    },
    {
      id: 2,
      title: "Second Block",
      images: [
        'https://source.unsplash.com/collection/190727/1600x900',
        'https://source.unsplash.com/collection/190727/1600x900',
        'https://source.unsplash.com/collection/190727/1600x900',
        'https://source.unsplash.com/collection/190727/1600x900'
      ]
    }
]

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return state
    default:
      return state
  }
}

export default carouselReducer
