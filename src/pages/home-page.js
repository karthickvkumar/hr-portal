import React, { Component } from 'react';
import { Table, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Api from '../services/api';
import {withRouter} from 'react-router-dom'

class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      userProfileList : [],
      filteredProfile : []
    }
  }

  async componentDidMount(){
    const url = "https://vcentry.herokuapp.com/users";
    const response = await Api.getAPI(url);
    
    if(response.status == 200){
      this.setState({
        userProfileList : response.data.data,
        filteredProfile : response.data.data
      });
    }
    else{
      alert('')
    }
  }

  handleSearch = (event) => {
    const filtered = this.state.filteredProfile.filter((value) => {
      return value.first_name.includes(event.target.value);
    })

    this.setState({
      userProfileList : filtered
    })
    
  }

  onLogout(){
    localStorage.clear();
    this.props.history.push('/');
  }

  render() {
    const columns = [
      {
        title : 'ID',
        dataIndex : 'id',
        key: 'id'
      }, 
      {
        title: "First Name",
        dataIndex: "first_name",
        key: 'first_name'
      },
      {
        title: "Last Name",
        dataIndex : "last_name",
        key: 'last_name'
      },
      {
        title: "Profile Picture",
        dataIndex: "avatar",
        key: 'avatar',
        render : avatar => {
          return(
            <img src={avatar} width="45px" />
          )
        }
      },
      {
        title: "Email ID",
        dataIndex : "email",
        key: 'email'
      },
    ];
    return (
      <div>
        <div>
          <h1>Home Page</h1>
          <button onClick={() => this.onLogout()}>Logout</button>
        </div>
        <Input placeholder="Type a username to filter..." prefix={<SearchOutlined />} onChange={this.handleSearch}/>
        <Table dataSource={this.state.userProfileList} columns={columns} />;
      </div>
    );
  }
}

export default withRouter(HomePage);