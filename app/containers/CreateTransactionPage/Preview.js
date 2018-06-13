import * as React from 'react'

type Props = { file: File }
type State = { preview: string }

class Preview extends React.PureComponent<Props, State> {
  state = {
    preview: '',
  }

  componentDidMount() {
    this.loadPreview()
  }

  componentDidUpdate() {
    this.loadPreview()
  }

  loadPreview = () => {
    const { file }: Props = this.props

    if (file) {
      const reader = new FileReader()

      reader.onload = () => {
        this.setState({ preview: reader.result })
      }

      reader.readAsDataURL(file)
    }
  }

  render(): React.Node {
    const { preview }: State = this.state

    return preview && (
      <img src={preview} alt="Asset preview" />
    )
  }
}

export default Preview
