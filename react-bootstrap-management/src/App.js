import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
class App extends Component {

  constructor(props) {
    super(props);
    this.state={
        tasks:[] // id: unique, name, status
    }
  
    this.state = {
      username:''
    };
  }
  onHandleChange=(event)=>{
    this.setState({
      username:event.target.value
    })
    console.log(event.target.value);
  }
  onHandleSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state);
  }
componentWillMount(){
    console.log('componentWillMount');
    if(localStorage&& localStorage.getItem('tasks')){
        var tasks = JSON.parse(localStorage.getItem('tasks'));
        this.setState({
            tasks:tasks
        });
    }
}
  onGenerateData=()=>{
    var tasks =[
        {
            id:this.generateId(),
            name:'Học lập trình',
            status:true
        },
        {
            id:this.generateId(),
            name:'Đi bơi',
            status:false
        },
        {
            id:this.generateId(),
            name:'Ngủ',
            status:true
        }
    ]
    console.log(tasks);
    this.setState({
        tasks: tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  s4(){
      return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
  generateId(){
      return this.s4() + this.s4()+'-'+this.s4() + '-' + this.s4()+ '-'+ this.s4() + this.s4()+'-'+this.s4() + '-' + this.s4();
  }
  render() {
    var { tasks } = this.state; //var tasks = this.state.t
    return (
     
      // <div>
      // <h1>Appcomponent</h1>
      // <Header/>
      // <div class="row">
      //      <div className="col-xs- col-sm- col-md- col-lg-">
      //        <Product/>
      //      </div>
      //      <div className="col-xs- col-sm- col-md- col-lg-">
      //       <Product/>
      //      </div>
      //    </div>
      // </div>
      
     //<div className="container mt-30">
     //   <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      //    <div className="panel panel-primary">
       //     <div className="panel panel-default">
     //           <div className="panel-heading">
      //            <h3 className="panel-title">Form</h3>
      //          </div>
        //        <div className="panel-body">
         //         <form onSubmit={ this.onHandleSubmit }>
         //           <div className="form-group">
         //             <label for="">User name: </label>
         //             <input 
         //             type="text" 
          //            className="form-control" 
          //            name="txtname" onChange={this.onHandleChange}/>
           //         </div>
           //         <button type="submit" className="btn btn-primary">Lưu lại</button>
           //         <button type="submit" className="btn btn-default">Xóa trắng</button>
           //       </form>
                  
            //    </div>
           // </div>
         // </div>
          
        //</div>
        
      //</div> 
      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                {/* Form */}
               <TaskForm/>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <button type="button" className="btn btn-primary">
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                <button type="button" className="btn btn-danger ml-5" onClick={this.onGenerateData}>
                    Generate Data
                </button>
                {/* Search - Sort */}
                <Control/>
               
                <TaskList tasks={tasks}/>
                   
            </div>
        </div>
    </div>
    );
  }
}

export default App;
