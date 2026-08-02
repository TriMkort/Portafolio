import { Link } from 'react-router-dom';

export function GlowButton({
  to,
  href = '#',
  children = 'Inicio',
  className = '',
  ...props
}) {
  const buttonClassName = `glow-button ${className}`.trim();

  if (to) {
    return <Link to={to} className={buttonClassName} {...props}>{children}</Link>;
  }

  return <a href={href} className={buttonClassName} {...props}>{children}</a>;
}

export default GlowButton;
