import React from 'react';
import styled from 'styled-components';


const Quote = styled.h3`
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
`;

const QuoteCard = ({ quoteJSON }) => {
    return (
        <div class="content is-medium">
            <Quote class="">“{quoteJSON.quote}”</Quote>
            <p>{quoteJSON.author}</p>
        </div>
    )
};

export default QuoteCard;
