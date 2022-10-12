import { type ReactNode, type Dispatch, type Reducer, createContext, useReducer } from "react"

type State = {}
type Reducers = { DEFAULT(payload: string): State }
type Actions = {
  [reducer in keyof Reducers]: (payload: Parameters<Reducers[reducer]>[number]) => {
    type: reducer
    payload: typeof payload
  }
}
type Action = ReturnType<Actions[keyof Actions]>

const initialState: State = {}
const reducers = (state: State): Reducers => ({
  DEFAULT: payload => ({ ...state })
})
const reducer: Reducer<State, Action> = (state, { type, payload }) => reducers(state)[type](payload) || state
const actions: Actions = {
  DEFAULT: payload => ({ type: "DEFAULT", payload })
}

type Value = {
  state: any
  dispatch: Dispatch<Action>
  actions: Actions
}
export const Context = createContext<Value>(null!)

export default ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Context.Provider value={{ state, dispatch, actions }}>{children}</Context.Provider>
}
