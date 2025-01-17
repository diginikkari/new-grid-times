import React from 'react';
import styled from 'styled-components/macro';

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
    return (
        <Wrapper>
            <MainStorySection>
                <MainStory {...MAIN_STORY} />
            </MainStorySection>

            <SecondaryStorySection>
                <StoryList>
                    {SECONDARY_STORIES.map((story, index) => (
                        <SecondaryStory key={story.id} {...story} />
                    ))}
                </StoryList>
            </SecondaryStorySection>

            <OpinionSection>
                <SectionTitle>Opinion</SectionTitle>
                <OpinionList>
                    {OPINION_STORIES.map((story, index) => (
                        <OpinionStory key={story.id} {...story} />
                    ))}
                </OpinionList>
            </OpinionSection>

            <AdvertisementSection>
                <Advertisement />
            </AdvertisementSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        'main-story'
        'secondary-stories'
        'opinion-stories'
        'advertisement';
    gap: 48px;
    margin-bottom: 48px;

    @media ${QUERIES.tabletAndUp} {
        grid-template-columns: 3fr 1fr;
        grid-template-areas:
            'main-story secondary-stories'
            'advertisement advertisement'
            'opinion-stories opinion-stories';
    }

    @media ${QUERIES.laptopAndUp} {
        grid-template-columns: 4fr 3fr 2fr;
        grid-template-areas:
            'main-story secondary-stories opinion-stories'
            'main-story advertisement advertisement';
    }
`;

const MainStorySection = styled.section`
    grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
    grid-area: secondary-stories;
`;

const StoryList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    a:not(:last-of-type) {
        padding-bottom: 16px;
        border-bottom: 1px solid var(--color-gray-300);
    }
`;

const OpinionList = styled(StoryList)`
    @media ${QUERIES.tabletOnly} {
        display: grid;
        --min-column-width: min(172px, 100%);
        grid-template-columns: repeat(auto-fit, minmax(172px, 1fr));

        @media ${QUERIES.tabletOnly} {
        a:not(:last-of-type) {
            border-bottom: none;
        }

    }
`;

const OpinionSection = styled.section`
    grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
    grid-area: advertisement;
`;

export default MainStoryGrid;
