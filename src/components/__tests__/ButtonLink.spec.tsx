import React from 'react';
import { render } from '@testing-library/react';
import ButtonLink from '../ButtonLink';

describe('<ButtonLink />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <ButtonLink
        text="muhammad-zulfikar.github.io"
        title="muhammad-zulfikar.github.io"
        href="https://muhammad-zulfikar.github.io"
        icon={{
          prefix: 'fas',
          iconName: 'coffee',
        }}
        size="lg"
        showCount={false}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
