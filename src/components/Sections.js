import {CardGrid} from './CardGrid';
import {Quote} from './Quote';
import {Hero} from './Hero';
const types = {
    hero: Hero,
    quote: Quote,
    "card-grid": CardGrid
}

export function Sections({sections}){
    console.log(sections);
    return(
        <div>
           {sections.map((section) => {
            const Comp = types[section.type]
            return(
                <Comp {...section}/>
            )
           } )}
        </div>
    )
}



