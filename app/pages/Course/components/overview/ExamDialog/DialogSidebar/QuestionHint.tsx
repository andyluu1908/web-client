import * as React from 'react'
import { RendererProps } from 'common/utils/relay'
import Loading from 'common/components/Loading'

const { graphql } = require('react-relay/compat')
import { QueryRenderer } from 'react-relay'
import environment from 'relayEnvironment'

const rootQuery = graphql`
  query QuestionHintQuery($resolverArgs: [QueryResolverArgs]!) {
    questionHint(resolverArgs: $resolverArgs) {
      hint
    }
  }
`

export interface IProps {
  shouldFetch: boolean
  questionId: string
}

class QuestionHint extends React.PureComponent<IProps, any> {
  queryRender = ({ error, props }: RendererProps) => {
    if (error) {
      return (
        <div>
          {error.message}
        </div>
      )
    }

    if (!props) {
      return <Loading mt="0" />
    }

    const hint = props.questionHint ? props.questionHint.hint : ''

    return (
      <span>
        {hint}
      </span>
    )
  }

  render() {
    if (!this.props.questionId || !this.props.shouldFetch) {
      return null
    }
    const variables = {
      resolverArgs: [
        {
          param: 'question_id',
          value: this.props.questionId
        }
      ]
    }
    return (
      <QueryRenderer
        query={rootQuery}
        variables={variables}
        environment={environment} // RelayEnvironment
        render={this.queryRender}
      />
    )
  }
}
export default QuestionHint
