import React from 'react';
import Hello from "./Hello";
import Length from "./Length"
import Form from "./Form"
import Range from "./Range"
import Posts from "./Posts";
import './App.css';

class App extends React.Component {

  state = {
    posts: [
      { id: "1", name: "JS Basics", title: "Обучение базовым конструкциям JavaScript" },
      { id: "2", name: "JS Advanced", title: "Обучение расширенным возможностям JavaScript" },
      { id: "3", name: "React JS", title: "Обучение ReactJS" },
    ]
  }

  render() {
    let { posts } = this.state;
    return (
      <div className="App">
        <Posts posts={posts} />
        <Hello />
        <Length />
        <Form />
        <Range />
      </div>
    );
  }

}

export default App;
