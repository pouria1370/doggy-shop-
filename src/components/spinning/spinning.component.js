import React from 'react'
import { WrapperSpinner, Spinner } from "./spinning.style";

const SpinnerLoading =
  (WrappedComponent) =>{
  const SpinnerOf=({ isLoading, ...otherProps }) => {
    return isLoading ? (
      
      <WrapperSpinner>
        <Spinner />
      </WrapperSpinner>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  }
  return SpinnerOf
};
export default  SpinnerLoading;
