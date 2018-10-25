import { Card } from '@material-ui/core';
import * as React from 'react';
import './PostCardPresentation.scss';

interface IProps {
  title?: string;
  body?: string;
}

export const PostCardPresentation = (props: IProps) => (
  <Card className="post-card">
    <h1 className="title">{props.title || 'No title'}</h1>
    <p className="body">{props.body || 'No body'}</p>
  </Card>
);
