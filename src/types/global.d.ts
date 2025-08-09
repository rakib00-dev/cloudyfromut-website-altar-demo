declare module 'react-outside-click-handler' {
  import * as React from 'react';

  interface Props {
    children: React.ReactNode;
    onOutsideClick?: (event?: MouseEvent) => void;
    disabled?: boolean;
    useCapture?: boolean;
  }

  export default class OutsideClickHandler extends React.Component<Props> {}
}
