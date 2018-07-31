import * as React from 'react'
let Markdown = require('react-remarkable')
import { ActionButton, Content, Title, Wrapper } from './styledComponents'

export interface ExplanationProps {
  title: string
  content: string
  buttonText?: string
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  hidden?: boolean
}

class Explanation extends React.PureComponent<ExplanationProps, any> {
  render() {
    const { title, content, buttonText, onButtonClick, hidden } = this.props
    return (
      <Wrapper hidden={hidden}>
        <hr />
        <Title>
          {title}
        </Title>
        <Content>
          <Markdown options={{ html: true }} source={content || ''} />
        </Content>
        {buttonText &&
          <ActionButton text={buttonText} onClick={onButtonClick} />}
      </Wrapper>
    )
  }
}

export default Explanation
