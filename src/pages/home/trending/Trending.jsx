import React, { useState } from 'react';

//Components
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import Carousel from '../../../components/carousel/Carousel';

//Hooks
import useFetch from '../../../hooks/useFetch';

const Trending = () => {
    const [endpoint, setEndPoint] = useState('day');
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`); //Fetching trending movies/tv shows

    const onTabChange = (tab) => {
        setEndPoint(tab === 'Day' ? 'day' : 'week');
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Trending</span>
                <SwitchTabs
                    data={['Day', 'Week']}
                    onTabChange={onTabChange}
                />
            </ContentWrapper>
            <Carousel
                data={data?.results}
                loading={loading}
            />
        </div>
    );
};

export default Trending;
