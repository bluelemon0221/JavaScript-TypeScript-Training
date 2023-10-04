import Header from "../components/Header";
import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";

const TopPage = (props) => {
    return (
        <div className="top-page-container">
            <div>
                <Header />
                <Title />
                {/* <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData} />       */}
                <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} />
                <Results countryData={props.countryData} loading={props.loading}/>
            </div>
        </div>
    );
};

export default TopPage;