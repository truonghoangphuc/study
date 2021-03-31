const Header = (props) => {

  return (
    <header className="sodoku-header">
      <h1 className="sodoku-title">{props.title}</h1>
    </header>
  )
}

export default Header;