import '@testing-library/jest-dom';
import 'jest-styled-components';
import React from 'react';
import { render, cleanup } from '@testing-library/react';

import RadioAndLabel, { RadioAndLabelProps } from './RadioAndLabel';
import { ThemeProvider } from '../theme';

describe('<RadioAndLabel />', () => {
  let props: RadioAndLabelProps;

  beforeEach(() => {
    props = {
      name: 'test radio',
      label: 'Random Radio',
      value: 'test-id',
      selected: true,
      onChange: jest.fn(),
    };
  });

  afterEach(cleanup);

  const renderComponent = () =>
    render(
      <ThemeProvider>
        <RadioAndLabel {...props} />
      </ThemeProvider>,
    );

  it('Should render label correctly', () => {
    const { getByTestId } = renderComponent();
    const labelComponent = getByTestId('radio-label-text');
    expect(labelComponent).toHaveTextContent(props.label);
  });
});
