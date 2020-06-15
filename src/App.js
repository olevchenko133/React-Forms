import React from 'react';
import unsplash from './api/unsplash'
import './App.css';
import SearchBar from './SearchBar'
import ImageList from './ImageList'
class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     images: []
  //   }

  //   this.onSearchSubmit = this.onSearchSubmit.bind(this)
  // }
  state = {
    images: []
  }

  // async onSearchSubmit(term) {

  //   const response = await axios.get("https://api.unsplash.com/search/photos", {
  //     params: { query: term },
  //     headers: {
  //       Authorization: "Client-ID HkjX0Q56MYsqUsKfPTL5w74MlOg-Tuv-B1NK3Ej4NOE",

  //     }
  //   })
  //   this.setState({ images: response.data.results })
  // }

  onSearchSubmit = async (term) => {

    const response = await unsplash.get("/search/photos", {
      params: { query: term },

    })
    this.setState({ images: response.data.results })
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "50px" }}>

        {/* <SearchBar /> */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* <div>{imegaGal} </div> */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
