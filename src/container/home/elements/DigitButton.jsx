import useHome from "../hooks/useHome"

export default function DigitButton({ dispatch, digit }) {
    const {ACTIONS} = useHome()
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}
