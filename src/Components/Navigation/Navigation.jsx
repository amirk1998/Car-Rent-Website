import { NavLink } from 'react-router-dom';

// const items = [
//   { name: 'Home', to: '/' },
//   { name: 'Add New Contact', to: '/new-contact' },
// ];

const Navigation = (props) => {
  return (
    <nav className=''>
      {/* <ul className='flex flex-row items-center justify-evenly'>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={(navData) =>
                  navData.isActive
                    ? '  text-red-500 '
                    : 'text-slate-400 hover:text-slate-700 '
                }
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul> */}
    </nav>
  );
};

export default Navigation;
