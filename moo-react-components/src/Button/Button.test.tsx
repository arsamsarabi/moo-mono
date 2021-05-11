import 'jest-styled-components';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { rgba } from 'polished';

import Button, { ButtonProps } from './Button';
import { defaultTheme } from '../theme';

describe('<Button />', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      color: 'hotpink',
      inverse: false,
      disabled: false,
      theme: defaultTheme,
    };
  });

  afterEach(cleanup);

  const renderComponent = () =>
    render(<Button {...props} data-testid="button-component" />);

  it('Should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('Should have disabled styles', () => {
    props.disabled = true;
    const { container, getByTestId } = renderComponent();
    const button = getByTestId('button-component');

    expect(container).toMatchSnapshot();
    expect(button).toHaveStyleRule(
      'background-color',
      rgba(defaultTheme.palette.common.black, 0.5),
    );
    expect(button).toHaveStyleRule(
      'color',
      rgba(defaultTheme.palette.common.white, 0.5),
    );
    expect(button).toHaveStyleRule(
      'border-color',
      rgba(defaultTheme.palette.common.white, 0.5),
    );
  });
});
