import { Card } from '@material-ui/core';
import * as React from 'react';
import './PostCardPresentation.scss';

interface IProps {
  id?: number;
  title?: string;
  body?: string;
  onClick?: (id: number) => void;
}

const handleClick = (onClick: any) => (id: number) => () => onClick(id);

export const PostCardPresentation = (props: IProps) => (
  <Card onClick={handleClick(props.onClick)(props.id as number)} className="post-card">
    <h1 className="title">{props.title || 'No title'}</h1>
    <p className="body">{props.body || 'No body'}</p>
  </Card>
);

PostCardPresentation.defaultProps = {
  id: 0,
  title: 'Title',
  body: 'Body',
  onClick(id: number) {}
};
