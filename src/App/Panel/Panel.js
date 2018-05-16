import React, { Component } from 'react';
import DownloadForm from './DownloadForm';
import RemoveForm from './RemoveForm';
class Panel extends Component {


  render() {
    return (
      <div>
        <DownloadForm />
        <RemoveForm />
      </div>
    )
  }
}

export default Panel;