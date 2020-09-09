import * as React from 'react';
import { useSelector } from 'react-redux'

function ComponentButton({ buttonType, isDisabled, onClickEvent, buttonText }) {
    const store = useSelector(state => console.log('ALL STATE', state));
  return (
    <button type="button"
            className={"btn " + buttonType}
            disabled={isDisabled}
            onClick={onClickEvent}>
            { buttonText }
    </button>
  )
}

export default ComponentButton;
