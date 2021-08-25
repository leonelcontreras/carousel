const ReduxUtil = () => {
  const createActionType = module => action => `${module}/${action}`

  return {
    createActionType
  }
}

export default ReduxUtil
