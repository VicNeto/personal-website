import React, { Component } from 'react';
import styled from 'styled-components';
import List from './List';
import QuoteCard from './QuoteCard';

const ProfileWrapper = styled.div`
`;

const Avatar = styled.img`
    width: 150px;
`;

const Name = styled.h1`
    font-size: 60px;
    background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const socialMedia = [
    {
        url: "https://github.com/VicNeto",
        src: "../github-desktop.svg",
        alt: "github",
    },
    {
        url: "https://www.linkedin.com/in/vicgvelazquez/",
        src: "../linkedin.svg",
        alt: "linkedin",
    },
];

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            profileData: {},
            quoteData: {},
            loading: true,
        }
    }

    async componentDidMount() {
        const profile = await fetch('https://api.github.com/users/VicNeto');
        const quote = await fetch('/.netlify/functions/load-quote');
        const profileJSON = await profile.json();
        const quoteJSON = await quote.json();

        if (profileJSON && quoteJSON) {
            this.setState({
                profileData: profileJSON,
                quoteData: quoteJSON,
                loading: false
            })
        }
    }

    render() {
        const { profileData, quoteData, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }
        
        return (
            <ProfileWrapper class="">
                <Avatar src={profileData.avatar_url} alt='avatar' />
                <Name class="title is-3">{profileData.name}</Name>
                <p class="title is-4">{profileData.bio}</p>
                <hr/>
                <List items={socialMedia}/>
                <hr/>
                <QuoteCard quoteJSON={quoteData}/>
                    {/* <List items={items}/> */}
            </ProfileWrapper>
        );
    }
}

export default Profile;