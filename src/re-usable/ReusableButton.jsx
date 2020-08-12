import * as React from 'react';

const ReusableButton = ({ buttonType, isDisabled, onClickEvent, buttonText }) => {
  return (
    <button type="button"
            className={"btn " + buttonType}
            disabled={isDisabled}
            onClick={onClickEvent}>
            { buttonText }
    </button>
  )
};

export default ReusableButton;
