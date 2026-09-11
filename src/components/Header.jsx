import { NavLink, useNavigate} from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()
  function handleSearchKeyDown(e) {
    if (e.key === 'Enter' && e.target.value.trim()) {
      navigate('/search?q=' +encodeURIComponent(e.target.value.trim()))
      e.target.value = '';
    }
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/"
          className="brand"
        >
          <div className="brand-mark">t</div>
          <div className="brand-name">Terra</div>
        </NavLink>

        <nav className="main-nav">
          <NavLink className={({isActive}) => `nav-link${ isActive ? " active" : ""}`} to="/">Главная</NavLink>
          <NavLink className={({isActive}) => `nav-link${ isActive ? " active" : ""}`} to="/catalog">Каталог</NavLink>
          <NavLink className={({isActive}) => `nav-link${ isActive ? " active" : ""}`} to="/about">О нас</NavLink>
          <NavLink className={({isActive}) => `nav-link${ isActive ? " active" : ""}`} to="/contacts">Контакты</NavLink>
        </nav>

        <div className="header-search">
          <input type="text" placeholder="Найти растение..." onKeyDown={handleSearchKeyDown} />
        </div>
      </div>
    </header>
  );
}

function NavItem({ label, page, currentPage, onNavigate }) {
  return (
    <a
      href={'/' + (page === 'home' ? '' : page)}
      className={'nav-link' + (currentPage === page ? ' active' : '')}
      onClick={e => { e.preventDefault(); onNavigate(page); }}
    >
      {label}
    </a>
  );
}
