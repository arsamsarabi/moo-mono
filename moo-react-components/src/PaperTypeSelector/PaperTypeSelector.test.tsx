import 'jest-styled-components';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import each from 'jest-each';

import PaperTypeSelector, { PaperTypeSelectorProps } from './PaperTypeSelector';
import { ThemeProvider } from '../theme';
import { DEFAULT_PAPER_TYPES } from '../ProductConfigurator/ProductConfigurator';

describe('<PaperTypeSelector />', () => {
  let props: PaperTypeSelectorProps;

  beforeEach(() => {
    props = {
      paperTypes: DEFAULT_PAPER_TYPES,
      selectedType: 'pt1',
      onChange: jest.fn(),
    };
  });

  afterEach(cleanup);

  const renderComponent = () =>
    render(
      <ThemeProvider>
        <PaperTypeSelector {...props} />
      </ThemeProvider>,
    );

  each(DEFAULT_PAPER_TYPES).test(
    'Should render %s option correctly',
    ({ id }) => {
      const { getByTestId } = renderComponent();
      expect(getByTestId(`test-${id}`)).toBeInTheDocument();
    },
  );
});
