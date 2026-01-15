import React from 'react';
import ReactDOM from 'react-dom';
import ResponsiveImage from './components/ResponsiveImage';

const App = () => {
    return (
        <div>
            <h1>Welcome to the Web Image Pipeline Project</h1>
            <ResponsiveImage 
                src="/assets/images/sample.jpg" 
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));