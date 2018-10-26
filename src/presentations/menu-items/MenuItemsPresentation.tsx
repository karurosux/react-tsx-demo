import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {} from '@material-ui/icons';
import InboxIcon from '@material-ui/icons/Inbox';
import * as React from 'react';
import { MenuItemModel } from '../../models/MenuItemModel';

interface IProps {
  menuItems: MenuItemModel[];
}

export const MenuItemsPresentation = (props: IProps) => (
  <div className="menu-items">
    <List component="nav">
      {props.menuItems.map(menuItem => (
        <ListItem key={menuItem.route} button={true}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText className="menu-item" primary={menuItem.text} />
        </ListItem>
      ))}
    </List>
  </div>
);

MenuItemsPresentation.defaultProps = {
  menuItems: []
};
