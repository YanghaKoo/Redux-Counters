// 여기엔 액션 생성함수 정의
import { INCREMENT, DECREMENT, SET_COLOR,CREATE, REMOVE } from './ActionTypes'

export const create = (color) => (
  {type : CREATE, color : color}
)

export const remove = () => (
  { type : REMOVE }
)

export const increment = (index) => (
  { type : INCREMENT, index }
)
export const decrement = (index) => (
  { type : DECREMENT, index }
)
export const setColor = ({index, color}) => (
  { type : SET_COLOR, color: color, index : index }
)