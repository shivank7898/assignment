import React from "react";

const Button = ({ text, className }) => {
  // Default Tailwind CSS classes for the button
  const defaultClasses =
    "rounded-lg bg-blue-600 px-10 py-4 text-white font-semibold text-lg";

  // Merge the default classes with the provided className
  const buttonClasses = `${defaultClasses} ${className}`;

  return <button className={buttonClasses}>{text}</button>;
};

export default Button;
