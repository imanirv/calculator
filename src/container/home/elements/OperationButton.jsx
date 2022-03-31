import useHome from "../hooks/useHome"

export default function OperationButton({ dispatch, operation }) {
  const {ACTIONS} = useHome()
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}
