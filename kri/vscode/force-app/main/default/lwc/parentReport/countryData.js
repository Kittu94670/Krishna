export const getCountries = (flagBaseUrl) => {
    return [
        { 
            id: '1', 
            name: 'India', 
            image: flagBaseUrl + '/india.png',
            info: 'Famous for its diverse culture and spicy food.' 
        },
        { 
            id: '2', 
            name: 'USA', 
            image: flagBaseUrl + '/usa.png',
            info: 'Known for the Statue of Liberty and Hollywood.' 
        },
        { 
            id: '3', 
            name: 'Germany', 
            image: flagBaseUrl + '/germany.png', 
            info: 'Famous for its engineering and Octoberfest.' 
        },
        { 
            id: '4', 
            name: 'Japan', 
            image: flagBaseUrl + '/japan.png',
            info: 'Known for Cherry Blossoms and advanced technology.' 
        }
    ];
};