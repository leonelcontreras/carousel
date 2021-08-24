import { ReduxUtil } from '../../utils'

const reduxUtil = ReduxUtil()
const module = reduxUtil.createActionType('CAROUSEL')

const GET_ITEM = module('GET_ITEM')
const GET_NEXT_ITEM = module('GET_NEXT_ITEM')
const GET_PREV_ITEM = module('GET_PREV_ITEM')

export default {
  GET_ITEM,
  GET_NEXT_ITEM,
  GET_PREV_ITEM
}