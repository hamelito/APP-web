import React from 'react';

export default class FetchRandomUser {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = 'http://127.0.0.1:8000/api/tutorials';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div>{this.state.person.title}</div>
      </div>
    );
  }
}
