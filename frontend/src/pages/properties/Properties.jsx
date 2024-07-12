import React, { useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import './Properties.css';
import useProperties from '../../hooks/useProperties';
import PropertyCard from '../../components/PropertyCard/PropertyCard';

const Properties = () => {
    const { data, isError, isLoading } = useProperties();
    const [filter, setFilter] = useState('');

    if (isError) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <span>Error while fetching data</span>
                </div>
            </div>
        );
    }

    if (isLoading || !data) {
        return (
            <div className="wrapper flexCenter" style={{ height: '100vh' }}>
                <span>Loading...</span>
            </div>
        );
    }

    const filteredData = data.filter((property) =>
        property.title.toLowerCase().includes(filter.toLowerCase()) ||
        property.city.toLowerCase().includes(filter.toLowerCase()) ||
        property.country.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="wrapper">
            <div className="innerWidth paddings flexColCenter properties-container">
               
                <SearchBar filter={filter} setFilter={setFilter} />
               
               
                <div className="flexCenter paddings properties">
                    {Array.isArray(filteredData) && filteredData.length > 0 ? (
                        filteredData.map((card, i) => (
                            <PropertyCard card={card} key={i} />
                        ))
                    ) : (
                        <span>No properties found</span>
                    )}
               
                </div>
            </div>
        </div>
    );
};

export default Properties;
