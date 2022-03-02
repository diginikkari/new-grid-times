import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
    return (
        <header>
            <SuperHeader>
                <Row>
                    <SearchAndMenu />
                    <UserMenu />
                </Row>
            </SuperHeader>
            <MainHeader>
                <ButtonWrapper>
                    <SearchAndMenu />
                </ButtonWrapper>
                <Logo />
                <Subscribe>
                    <Button>Subscribe</Button>
                    <a href="#">Already a Subcriber?</a>
                </Subscribe>
            </MainHeader>
        </header>
    );
};

const Subscribe = styled.div`
    display: none;

    a {
        text-decoration: underline;
        font-style: italic;
        font-size: ${14 / 16}rem;
        color: var(--color-gray-900);
    }

    @media ${QUERIES.desktopAndUp} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: end;
        gap: 8px;
    }
`;

const ButtonWrapper = styled.div`
    display: none;

    @media ${QUERIES.desktopAndUp} {
        display: revert;
    }
`;

const SuperHeader = styled.div`
    padding: 16px 0;
    background: var(--color-gray-900);
    color: white;

    @media ${QUERIES.desktopAndUp} {
        display: none;
    }
`;

const Row = styled(MaxWidthWrapper)`
    display: flex;
    justify-content: space-between;
`;

const ActionGroup = styled.div`
    display: flex;
    gap: 24px;

    /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
    svg {
        display: block;
    }
`;

const MainHeader = styled(MaxWidthWrapper)`
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;
    padding-left: 32px;
    padding-right: 32px;

    @media ${QUERIES.desktopAndUp} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`;

export default Header;

function SearchAndMenu(props) {
    return (
        <ActionGroup {...props}>
            <button>
                <Search size={24} />
            </button>
            <button>
                <Menu size={24} />
            </button>
        </ActionGroup>
    );
}

function UserMenu() {
    return (
        <ActionGroup>
            <button>
                <User size={24} />
            </button>
        </ActionGroup>
    );
}
