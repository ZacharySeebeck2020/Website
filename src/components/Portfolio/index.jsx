import React from 'react';
import Card from './components/Card';

function Portfolio(props) {
    return (
        <div id="portfolio" class="container" style={{marginBottom: '2em'}}>
            <h1>Portfolio</h1>
            <div style={{display: 'flex'}}>
                <Card backgroundImage="/img/proj/ewsg.png" title="BPA Web App 2020"></Card>
                <Card backgroundImage="/img/proj/joes_auto.png" title="Joes Automotive"></Card>
                <Card backgroundImage="/img/proj/santa_house.png" title="Bay City Santa House"></Card>
            </div>
        </div>
    );
}

export default Portfolio;