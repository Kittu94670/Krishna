import CountryFlags from '@salesforce/resourceUrl/CountryFlags';

const countries = [
    {
        name: 'India',
        capital: 'New Delhi',
        population: '1.4 Billion',
        president: 'Droupadi Murmu',
        image: CountryFlags + '/india.png'
    },
    {
        name: 'USA',
        capital: 'Washington D.C',
        population: '331 Million',
        president: 'Joe Biden',
        image: CountryFlags + '/usa.png'
    },
    {
        name: 'UK',
        capital: 'London',
        population: '67 Million',
        president: 'King Charles III',
        image: CountryFlags + '/uk.png'
    },
    {
        name: 'France',
        capital: 'Paris',
        population: '65 Million',
        president: 'Emmanuel Macron',
        image: CountryFlags + '/france.png'
    },
    {
        name: 'Japan',
        capital: 'Tokyo',
        population: '125 Million',
        president: 'Fumio Kishida',
        image: CountryFlags + '/japan.png'
    }
];

export default countries;