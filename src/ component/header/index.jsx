import { Component } from 'react'
import { View, Text, Button, Image } from '@tarojs/components';
import backimg from '../../images/back.png';
import './index.scss'
export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }

    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }

    handleClick = (text) => {
        console.log(text)
    }
  
    render () {
      const { title } = this.props;
      return (
        <View className='header'>
          <Image src = {backimg} className='header_back' />
          <Text className='header_title'>{title}</Text>
          <Text className='header_save' onClick={()=>this.handleClick("保存")}>保存</Text>
        </View>
      )
    }
  }
  