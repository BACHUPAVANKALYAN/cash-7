import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updatedValue} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updatedValue(value)
  }

  return (
    <li className="denomination-items">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
