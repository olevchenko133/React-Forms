import React, { Component } from 'react'

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spans: 0
        }
        this.imageRef = React.createRef();

    }
    componentDidMount() {
        //  this.imageRef.current references the image, but can try to have the height of an image before it loads completely

        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    //   we need to transfer context of ImageCard component to addEventListener Callback
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10)
        this.setState({ spans })
    };

    render() {
        const { description, urls } = this.props.image
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard
