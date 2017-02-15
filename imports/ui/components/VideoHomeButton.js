import React from 'react';

class VideoHomeButton extends React.Component {

  render() {
    return (
      <div onClick={this.props.homeAction.bind(this)} className="home-button">
      </div>
    );
  }

}

VideoHomeButton.propTypes = {
  homeAction: React.PropTypes.func,
};

export default VideoHomeButton;
