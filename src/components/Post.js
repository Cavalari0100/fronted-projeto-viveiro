class Post extends Component {
    render() {
      return (
        <div className="post">
          <span>{this.props.content}</span>
        </div>
      )
    }
  }