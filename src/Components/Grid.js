import React from 'react';
import classnames from 'classnames';

export const Row = ({className, children, ...props}) => (
  <div className={classnames("row", className)} {...props}>
    {children}
  </div>
)

export const Column = ({className, width, offset, children, ...props}) => {
  return (
    <div className={classnames('column', `column-${width}`, { [`offset-${offset}`]: !!offset }, className)} {...props}>
      {children}
    </div>
  );
}
