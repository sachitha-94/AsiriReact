import React, { PureComponent } from "react"


class TestClassComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {name:"" ,second:""};
        this.nameOnchange= this.nameOnchange.bind(this);
        this.secondOnchange= this.secondOnchange.bind(this)
        console.log("constructor")
      }
      

      componentDidMount(){
        console.log("componentDidMount")

      }
      componentDidUpdate(){
        console.log("componentDidUpdate")
      }

      static getDerivedStateFromProps(props, state){
          
        console.log("getDerivedStateFromProps")
      }

      nameOnchange(event){
        this.setState({name:event.target.value});  
      }

      secondOnchange(event){
        this.setState({second:event.target.value});  
      }


 render() {
    console.log("render")
        return (
            <div>
                hello Class Component
         
           <label for="fname">First name:</label>
           <input type="text" id="fname" name="fname" value={this.state.name} onChange={this.nameOnchange}/>
           <label for="fname">secoend name:</label>
           <input type="text" id="fname" name="fname" value={this.state.second} onChange={this.secondOnchange}/>

           <br/>
           <br/>
           <br/>
           <br/>
           <span>{`${this.state.name} ${this.state.second}`}</span>
           </div>
        )
    }
}
export default TestClassComponent


