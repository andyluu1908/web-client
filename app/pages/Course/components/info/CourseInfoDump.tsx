import * as React from 'react'

import { Wrapper } from './styledComponents'
import { IFreactalProps } from '../../index'
import { RouteComponentProps, withRouter } from 'react-router'
import { injectState } from 'freactal'
import messages from './messages'
import { injectIntl } from 'react-intl'
import InjectedIntlProps = ReactIntl.InjectedIntlProps
let Markdown = require('react-remarkable')

interface IProps {
  title: string
  logoUrl: string
  infoMarkdown: string
  verifiedCertCost?: number
}

interface IState {}

class CourseInfoDump extends React.Component<
  IProps & IFreactalProps & InjectedIntlProps & RouteComponentProps<any>,
  IState
> {
  static defaultProps = {}

  state = {}
  static contextTypes = {
    viewer: React.PropTypes.object
  }
  context: any

  parseContent(text: string) {
    return <Markdown options={{ html: true }} source={text || ''} />
  }

  render() {
    const { formatMessage } = this.props.intl
    const { infoMarkdown, verifiedCertCost } = this.props

    return (
      <Wrapper>
        {this.parseContent(infoMarkdown)}
        {verifiedCertCost}
      </Wrapper>
    )
  }
}

export default withRouter(injectIntl(injectState(CourseInfoDump)))
