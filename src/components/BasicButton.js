import React from "react";
import { Button, Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const BasicButton = (props) => {
  const {
    variant,
    onClick,
    label,
    color,
    size,
    icon,
    className,
    isLoading,
    loaderVariant,
    loaderSize,
  } = props;
  const buttonStyle = {
    backgroundColor: color,
    borderColor: color,
  };
  return (
    <Button
      style={buttonStyle}
      variant={variant}
      className={className}
      size={size}
      onClick={onClick}
      disabled={!isLoading ? false : true}
    >
      {!isLoading ? (
        <>
          {icon} {label}
        </>
      ) : (
        <>
          <Spinner
            size={`${!loaderSize ? "sm" : loaderSize}`}
            variant={`${!loaderVariant ? "primary" : loaderVariant}`}
          />
        </>
      )}
    </Button>
  );
};
export default BasicButton;