import { Card } from "./Card.js";

export const CardContainer = (props) => {
    let { adivinanzas } = props;
    let section = document.createElement('section');
    section.setAttribute('class', 'conteiner')
    adivinanzas.forEach(adivinanza => {
        const card = Card(adivinanza);
        section.append(card);        
    });
    return section;
}