import { FC } from 'react';

export const Text: FC = ({ children }) => (
  <span style={{ fontSize: '16px', fontFamily: 'Arial', textDecoration: 'underline' }}>
    {children}
  </span>
);
