import React from 'react';
// import '../index.css';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import notes from '../notes';

function App(){
    return (<div>
        <Header />
        {notes.map(Note)}
        <Footer />
    </div>
    );
}

export default App;