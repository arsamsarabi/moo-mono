import 'jest-styled-components';
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import CheckboxAndLabel, { CheckboxAndLabelProps } from './CheckboxAndLabel';
import { ThemeProvider } from '../theme';

describe('<CheckboxAndLabel />', () => {
  let props: CheckboxAndLabelProps;

  beforeEach(() => {
    props = {
      name: 'test checkbox',
      checked: false,
      onChange: jest.fn(),
      label: 'Random Checkbox',
    };
  });

  afterEach(cleanup);

  const renderComponent = () =>
    render(
      <ThemeProvider>
        <CheckboxAndLabel {...props} />
      </ThemeProvider>,
    );

  it('Should render label correctly', () => {
    const { getByTestId } = renderComponent();
    const labelComponent = getByTestId('label-text');
    expect(labelComponent).toHaveTextContent(props.label);
  });

  it('Should fire onChange correctly', () => {
    const { getByTestId } = renderComponent();
    const inputComponent = getByTestId('checkbox-input');
    fireEvent.click(inputComponent);
    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
});
