import React from 'react';
// import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Header from "./components/Header/Header";
import {Rating} from "./components/Rating/Rating";
import {Technologies} from "./components/Technologies/Technologies";

// function declaration - для объявления компонентов,
// функции-компоненты объявляются с заглавной буквы
// Стрелочные функции используем для обработчика событии
function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"New friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleVal={"Menu"} collapsed={true}/>
            <Accordion titleVal={"Users"} collapsed={true}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Header/>
            <Technologies/>
        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
