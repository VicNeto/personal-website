import React from 'react';
import github from '../github-desktop.svg'
import linkedin from '../linkedin.svg';

const logos = {
    github: github,
    linkedin: linkedin
}

const List = ({ items }) => (
    <div class="">
        <span class="is-inline-flex">
            {items.map(item => 
                <a key={item.alt} class="level-item mr-5" href={item.url}>
                    <figure class="image is-32x32">
                    <img class="is-rounded" src={logos[`${item.alt}`]} alt={item.alt}/>
                    </figure>
                </a>
            )}
        </span>
    </div>
);

export default List;