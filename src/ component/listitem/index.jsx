import { Component } from 'react';
import { View, Text, Image} from '@tarojs/components';
import avatorimg from '../../images/avator.png'
import moreimg from "../../images/more.png";
import './index.scss'

export default class ListItem extends Component {

    constructor(props) {
        super(props);
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
      const { title, subtitle, showavator } = this.props;
      return (
        <View className='item' onClick={() => this.handleClick('Hello World')}>
          <View className='item_title'>
            <Text className='item_title_name'>{title}</Text>
            <Text className='item_title_content'>       {subtitle}</Text>
          </View>
          <View className='item_more'>
            {showavator ? <Image src={avatorimg} className='item_more_avator' /> :null}
            <Image src={moreimg}  className='item_more_arrow' />
          </View>
        </View>
      )
    }
  }
  