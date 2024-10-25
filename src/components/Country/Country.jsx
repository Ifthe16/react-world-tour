import './Country.css';
const Country = ({ country }) => {
    // console.log(country);
    const { name, flags, population, area } = country;
    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area}</p>
        </div>
    );
};

export default Country;