"use client";
import Link from 'next/link';
import styles from './style.module.scss';

// רכיב כפתור רב-שימושי שמקבל את כל הסטייל מה-mixin
const Button = ({
  children,
  href,
  className = '',
  ...props
}) => {
  const buttonClasses = `${styles.button} ${className}`;

  // אם יש href, ניצור תגית <Link> של Next.js
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  // אחרת, ניצור כפתור רגיל
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button; 