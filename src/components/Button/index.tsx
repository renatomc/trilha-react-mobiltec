import './styles.scss'

type ButtonProps = {
  label: string
  onClick: () => void
}

function Button({ label, onClick }: ButtonProps) {
  return (
    <button className="container" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
