import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchList = destinationsList.filter(eachItem =>
      eachItem.name.toUpperCase().includes(searchInput.toUpperCase()),
    )

    return (
      <div>
        <h1>Destination Search</h1>
        <input type="search" onChange={this.onChangeInput} />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
        <ul>
          {searchList.map(eachItem => (
            <DestinationItem details={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
