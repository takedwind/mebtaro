import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { SafeAreaView } from 'react-native'
import ListItem from '../../ component/listitem'

export default class Index extends Component {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <SafeAreaView>
        <View className='index'>
          <ListItem title="头像" showavator='true'/>
          <ListItem title="昵称" subtitle="美呗老司机"/>
          <ListItem title="性别" subtitle="男"/>
          <ListItem title="生日" subtitle="2020-05-20"/>
          <ListItem title="签名" subtitle="关注我有惊吓~"/>
        </View>
      </SafeAreaView>
    )
  }
}
