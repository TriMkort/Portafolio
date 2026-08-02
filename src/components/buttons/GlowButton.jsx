import { NavLink } from 'react-router-dom';

export function GlowButton({
  to,
  href = '#',
  children = 'Inicio',
  className = '',
  ...props
}) {
  const buttonClassName = `glow-button ${className}`.trim();
  let link;

  if (to) {
    link = (
      <NavLink
        to={to}
        className={({ isActive }) => `glow-button__link${isActive ? ' active' : ''}`}
        {...props}
      >
        {children}
      </NavLink>
    );
  } else {
    link = <a href={href} className="glow-button__link" {...props}>{children}</a>;
  }

  return <span className={buttonClassName}>{link}</span>;
}

export default GlowButton;
