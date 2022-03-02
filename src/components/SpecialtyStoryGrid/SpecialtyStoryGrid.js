import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
    return (
        <Wrapper>
            <MarketsSection>
                <SectionTitle
                    cornerLink={{
                        href: '/markets',
                        content: 'Visit Markets data »',
                    }}
                >
                    Markets
                </SectionTitle>
                <MarketCards>
                    {MARKET_DATA.map((data) => (
                        <MarketCard key={data.tickerSymbol} {...data} />
                    ))}
                </MarketCards>
            </MarketsSection>
            <SportsSection>
                <SectionTitle
                    cornerLink={{
                        href: '/sports',
                        content: 'Visit Sports page »',
                    }}
                >
                    Sports
                </SectionTitle>
                <SportsStories>
                    {SPORTS_STORIES.map((data) => (
                        <MiniStory key={data.id} {...data} />
                    ))}
                </SportsStories>
            </SportsSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        'markets'
        'sports';
    grid-template-columns: minmax(0, 1fr);
    gap: 48px;

    @media ${QUERIES.laptopAndUp} {
        grid-template-columns: 1fr minmax(0, 1fr);
        grid-template-areas: 'markets sports';
    }
`;

const MarketsSection = styled.section`
    grid-area: markets;
`;

const MarketCards = styled.div`
    --min-column-width: min(128px, 100%);
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(var(--min-column-width), 1fr)
    );
    gap: 16px;
`;

const SportsSection = styled.section`
    grid-area: sports;
`;

const SportsStories = styled.div`
    --min-column-width: min(128px, 100%);
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(var(--min-column-width), 1fr)
    );
    gap: 16px;

    @media ${QUERIES.tabletAndUp} {
        display: flex;
        gap: 16px;
        max-width: 100%;
        overflow: auto;

        a {
            min-width: 150px;
        }
    }
`;

export default SpecialtyStoryGrid;
