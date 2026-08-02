import React from "react";
import './Calculator.css'
import { Component } from "react";
import Button from "../Componet/Button";
import Display from "../Componet/Display";


const initialState = {
    DisplayValue: '0',
    clearM: false,
    operation: null,
    values: [0,0],
    current: 0

}

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
}


export default  class Calculator extends Component {
   

   state = {...initialState}

   constructor(props) {
    super(props)
    this.clearMermory = this.clearMermory.bind(this)
    this.operaçaoMat = this.operaçaoMat.bind(this)
    this.addDig = this.addDig.bind(this)
   }

  // Limpa o display
   clearMermory() {
    this.setState({...initialState})
   }
   // pega o digito da operaçao 
   addDig(n) {
     if (n === '.' && this.state.DisplayValue.includes('.')) return
   
     const clearM = this.state.DisplayValue === '0' || this.state.clearM
    
     const currentValue = clearM ? '' : this.state.DisplayValue
    
     const DisplayValue = currentValue + n

     this.setState({DisplayValue, clearM: false})
   
     if (n !== '.') {
        const i = this.state.current
        const newValue = parseFloat(DisplayValue)
        const values = [...this.state.values]
        values[i] = newValue

        this.setState({values})
     }

    }

     // adiciona o digio a fazer a operaçao
   operaçaoMat(operation) {
      
      if(this.state.current === 0) {
        this.setState({operation, current: 1, clearM: true})
      } else {
        const finished = operation === '=' 
        const currentOp = this.state.operation
        const values = [...this.state.values]

        try {
          values[0] = operations[currentOp](values[0], values[1])
        } catch (e) {
          values[0] = this.state.values[0]
        }
       values[1] = 0

       this.setState({
        DisplayValue: values[0],
        operation: finished ? null : operation,
        current: finished ? 0  : 1,
        clearM: !finished,
        values
       })
    }
    }
   
   
    render () {
        return (
            <div className="Calculator">
             <Display value = {this.state.DisplayValue}/>
             <Button label = 'AC' click = {this.clearMermory} col3/>
             <Button label = '/' click = {this.operaçaoMat} operation/> 
             <Button label = '7'click = {this.addDig}/>
             <Button label = '8'click = {this.addDig} />
             <Button label = '9'click = {this.addDig}/>
             <Button label = '*'click = {this.operaçaoMat} operation/> 
             <Button label = '4'click = {this.addDig}/>
             <Button label = '5'click = {this.addDig}/>
             <Button label = '6'click = {this.addDig}/>
             <Button label = '-'click = {this.operaçaoMat} operation/>
             <Button label = '1'click = {this.addDig}/>
             <Button label = '2'click = {this.addDig}/>
             <Button label = '3'click = {this.addDig}/>
             <Button label = '+'click = {this.operaçaoMat} operation/>
             <Button label = '0'click = {this.addDig} col2/>
             <Button label = '.' click = {this.addDig}/>
             <Button label = '='click = {this.operaçaoMat} operation/>            
            </div>
        )
    }
}
