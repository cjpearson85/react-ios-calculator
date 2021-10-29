import tsLogo from '../images/icons8-typescript.svg'
import reactLogo from '../images/icons8-react-native.svg'
import htmlLogo from '../images/icons8-html-5.svg'
import sassLogo from '../images/icons8-sass.svg'

const Header = () => {
  return (
    <div className="head-container">
      <h1>React iOS Calculator</h1>
      <div className="logo-container">
        <img className="logo" src={tsLogo} alt="TypeScript Logo" />
        <img className="logo" src={reactLogo} alt="React Logo" />
        <img className="logo" src={htmlLogo} alt="HTML5 Logo" />
        <img className="logo" src={sassLogo} alt="Sass Logo" />
      </div>
    </div>
  )
}

export default Header
