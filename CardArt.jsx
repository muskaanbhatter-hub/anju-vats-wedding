// A card = the artwork as background + live text laid over it.
// Text is positioned in % of the card and sized in cqw (1% of card width), so it scales perfectly.
export function Card({ img, ratio = '2 / 3', className = '', children }) {
  return (
    <div
      className={`relative mx-auto w-full overflow-hidden rounded-2xl bg-cream shadow-card ${className}`}
      style={{ aspectRatio: ratio, containerType: 'inline-size' }}
    >
      <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" draggable="false" />
      {children}
    </div>
  )
}

export function T({ y, x = 50, size = 3, font = 'font-display', weight = 400, track = 0.2, color = '#5b4a44', italic = false, className = '', style, children }) {
  return (
    <div
      className={`absolute whitespace-nowrap text-center leading-none ${font} ${className}`}
      style={{
        top: `${y}%`, left: `${x}%`, transform: 'translate(-50%,-50%)',
        fontSize: `${size}cqw`, fontWeight: weight, letterSpacing: `${track}em`,
        color, fontStyle: italic ? 'italic' : 'normal', ...style,
      }}
    >
      {children}
    </div>
  )
}
