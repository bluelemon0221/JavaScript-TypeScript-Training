import Loading from "./Loading";

const Results = (props) => {
    const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered, loading } = props.countryData;
    return (
        <div className="results-container">
            {props.loading ?
                <Loading />
                :
                <div>
                    <p><span>日付: {date.slice(0, 10)}</span></p>
                    <p><span>新規感染者: {newConfirmed.toLocaleString()}</span></p>
                    <p><span>感染者総数: {totalConfirmed.toLocaleString()}</span></p>
                    <p><span>新規回復者: {newRecovered.toLocaleString()}</span></p>
                    <p><span>回復者総数: {totalRecovered.toLocaleString()}</span></p>
                </div>
            }
        </div>
    );
};

export default Results;