import React from 'react';
import './Navigation.css';

const Navigation = ({ menuItems }) => {
  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.name}</a>
            {item.child && (
              <ul>
                {item.child.map((subItem) => (
                  <li key={subItem.id}>
                    <a href={`#${subItem.id}`}>{subItem.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
