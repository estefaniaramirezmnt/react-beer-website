import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header component', () => {

    let logo;

    beforeEach(() => {
        render(<Header />);
        logo = screen.getByAltText('Beer logo');
    });

    test('el logo se encuentra en el documento', () => {
        expect(logo).toBeInTheDocument();
    });
});
