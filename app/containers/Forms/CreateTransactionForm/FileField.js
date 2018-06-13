import * as React from 'react'

import StyledInput from './StyledInput'

type Props = {
  id: string,
  input: {
    onChange: Function,
    name: string,
  },
}

export default class FileField extends React.PureComponent<Props> {
  onChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { input: { onChange } } = this.props

    onChange(event.target.files[0])
  }

  render(): React.Node {
    const { id, input: { name } } = this.props

    return (
      <StyledInput id={id} type="file" name={name} onChange={this.onChange} />
    )
  }
}
