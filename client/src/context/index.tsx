import {
  FC,
  createContext,
  Dispatch,
  ReactNode,
  Reducer,
  useReducer
} from "react"

type StateData = {}
type ActionData = { type: string; payload: any }

const initialState: StateData = {}
const actions = {}
const reducer: Reducer<StateData, ActionData> = (state, { type, payload }) =>
  (({}[type] || { ...state }) as StateData)

type ContextData = {
  state: StateData
  dispatch: Dispatch<ActionData>
  actions: typeof actions
}
export const MyContext = createContext<ContextData>(null!)

export const MyContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <MyContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </MyContext.Provider>
  )
}
