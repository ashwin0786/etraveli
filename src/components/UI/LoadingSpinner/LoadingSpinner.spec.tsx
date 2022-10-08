import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingSpinner from '.';

describe('LoadingSpinner component', () => {
    it('render spinner', () => {
        const { container } = render(<LoadingSpinner />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
