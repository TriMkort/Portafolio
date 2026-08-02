import { NavLink } from 'react-router-dom';

export function NeonButton({
  to,
  href = '#',
  children = 'Neon',
  className = '',
  ...props
}) {
  const buttonClassName = `btn-neon ${className}`.trim();
  const content = (
    <>
      <span className="span1"></span>
      <span className="span2"></span>
      <span className="span3"></span>
      <span className="span4"></span>
      {children}
    </>
  );

  if (to) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) => `${buttonClassName}${isActive ? ' active' : ''}`}
        {...props}
      >
        {content}
      </NavLink>
    );
  }

  return (
    <a href={href} className={buttonClassName} {...props}>{content}</a>
  );
}

export default NeonButton;
