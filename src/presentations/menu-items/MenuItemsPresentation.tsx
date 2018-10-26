import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { MenuItemModel } from '../../models/MenuItemModel';

interface IProps {
  menuItems: MenuItemModel[];
}

export const MenuItemsPresentation = (props: IProps) => (
  <div className="menu-items">
    <List component="nav">
      {props.menuItems.map(menuItem => (
        <Link key={menuItem.route} to={menuItem.route}>
          <ListItem button={true}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText className="menu-item" primary={menuItem.text} />
          </ListItem>
        </Link>
      ))}
    </List>
  </div>
);

MenuItemsPresentation.defaultProps = {
  menuItems: []
};
