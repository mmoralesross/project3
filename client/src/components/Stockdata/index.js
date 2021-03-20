import React, { useState, useEffect } from "react";
import API from "../../utils/API";

import Wrapper from "../Wrapper";
import Card from "../Card";

function Stockdata() {
    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        loadStockData();
    }, [stockData]);

    function loadStockData() {
        API.getStocks("gm")
            .then(res => setStockData(res.data.price))
            .catch(err => console.log(err));
    };

    return (
        <Wrapper>
            {stockData ? (
                <Wrapper>
                    <Card key={stockData.symbol} data-stock-id={stockData.symbol} color="success">
                        <h1>{stockData.shortName}</h1>
                        <h2>{stockData.symbol}</h2>
                    </Card>
                </Wrapper>
            ) : (<h1>No Data found!</h1>)}
        </Wrapper>
    );
};

export default Stockdata;