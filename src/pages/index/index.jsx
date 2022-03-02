import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import ListItem from '../../ component/listitem'
import Header from '../../ component/header'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Header title="编辑资料"/>
        <ListItem title="头像" showavator='true'/>
        <ListItem title="昵称" subtitle="美呗老司机"/>
        <ListItem title="性别" subtitle="男"/>
        <ListItem title="生日" subtitle="2020-05-20"/>
        <ListItem title="签名" subtitle="关注我有惊吓~"/>
      </View>
    )
  }
}
