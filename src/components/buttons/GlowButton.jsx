import '../style.css';

export function GlowButton({
  href = '#',
  children = 'Inicio',
  className = '',
  ...props
}) {
  return (
    <div className="contenido">
      <div className={`btn ${className}`.trim()}>
        <a href={href} {...props}>
          {children}
        </a>
      </div>
    </div>
  );
}

export default GlowButton;
