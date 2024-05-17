import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  group?: 'primary' | 'secondary';
}

export default function Button({
  children,
  className,
  onClick,
  group,
}: ButtonProps) {
  const classes = `${styles.button} ${styles[`button_${group}`]} ${className}`;

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
