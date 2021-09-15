import {render, screen} from '@testing-library/react';

import Card from '../components/Card';

test('Should show personal info when the prop isShowPersonalInfo equals true', () => {
    render(<Card  isShowPersonalInfo={true}/>);

    const fromScreen = screen.queryByText("Meu dados pessoais");
    
    expect(fromScreen).toBeInTheDocument();
})

test("Should not show personal info when the prop isShowPersonalInfo equals false or not passed", () => {
    render(<Card/>);
    const fromScreen = screen.queryByText("Meu dados pessoais");
    expect(fromScreen).not.toBeInTheDocument();
})

test("Should show 'Meu Card' when rendrs", () => {

} )