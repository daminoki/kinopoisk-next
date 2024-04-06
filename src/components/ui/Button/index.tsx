import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  group?: 'primary' | 'secondary';
}

export default function Button({
  children, className, onClick, type = 'button', group,
}: ButtonProps) {
  const classes = `${styles.button} ${styles[`button_${group}`]} ${className}`;

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
