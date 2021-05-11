import 'jest-styled-components';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import each from 'jest-each';

import CoverColorSelector, {
  CoverColorSelectorProps,
} from './CoverColorSelector';
import { ThemeProvider } from '../theme';
import { DEFAULT_COLORS } from '../ProductConfigurator/ProductConfigurator';

describe('<CoverColorSelector />', () => {
  let props: CoverColorSelectorProps;

  beforeEach(() => {
    props = {
      colors: DEFAULT_COLORS,
      selectedColor: 'cc1',
      onChange: jest.fn(),
    };
  });

  afterEach(cleanup);

  const renderComponent = () =>
    render(
      <ThemeProvider>
        <CoverColorSelector {...props} />
      </ThemeProvider>,
    );

  each(DEFAULT_COLORS).test('Should render %s option correctly', ({ id }) => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(`test-${id}`)).toBeInTheDocument();
  });
});
