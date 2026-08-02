import '../style.css';

export function NeonButton({
  href = '#',
  children = 'Neon',
  className = '',
  ...props
}) {
  return (
    <a href={href} className={`btn-neon ${className}`.trim()} {...props}>
      <span className="span1"></span>
      <span className="span2"></span>
      <span className="span3"></span>
      <span className="span4"></span>
      {children}
    </a>
  );
}

export default NeonButton;
