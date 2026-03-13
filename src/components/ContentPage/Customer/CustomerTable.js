import React, { Component } from 'react';
import { Table } from "semantic-ui-react";
import TableCell from 'semantic-ui-react/dist/commonjs/collections/Table/TableCell';
import { FaPhoneSquare } from 'react-icons/fa';

const color = "teal";

function letterCheck(value , i){
    if(value.indexOf('/') !== -1 ){
        return(letterSeperate(value, i));
    }else{
        return(
         <TableCell key={i}> {value} </TableCell>
        );
    }
}

function letterSeperate(value , i){

    var obj = value.split('/');

    return (
        <TableCell key ={i}>
            {obj[0]} <br/>
            <a href='/'> {obj[1]} </a>
        </TableCell>
    );
}

class CustomerTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            cells: this.props.onContent
         };
         this.LoadData = this.LoadData.bind(this);
    }

    LoadData(){
        const style = {width:"80%" , padding: "20px" ,marginLeft : "auto", marginRight: "auto"};
       return <div style={style}>
           <Table color={color} key={color}>
             <Table.Header>
               <Table.Row>
                 {this.state.cells.map((cell, i) => (
                   <Table.HeaderCell key={i} style={{textAlign:"center"}}>
                     {cell.title}
                   </Table.HeaderCell>
                 ))}
               </Table.Row>
             </Table.Header>
             <Table.Body>
                 {this.state.cells.map((cell, i) => (
                   <Table.Row key={i} style={{textAlign:"center"}}>
                     {cell.content.map((_cell, i ) =>{
                        return(
                            letterCheck(_cell , i)
                        )
                     })
                     }
                   </Table.Row>
                 ))}
             </Table.Body>
           </Table>
         </div>;
    }

    render() {
        return (
            <div style ={{marginBottom: "100px"}}>
                <div style = {{padding: "30px" , marginLeft:"10%" }}>
                    <div style ={{color: "#169b9b" ,float:"left" }}>
                    <FaPhoneSquare size={26}/>
                    </div>
                    <span style={{float: "left" , fontSize: "1.1em" , fontWeight:"bold" , padding: "3px" , marginLeft:"5px"}}> 연락처 </span>
                </div>
                {this.LoadData()}
            </div>
        );
    }
}

export default CustomerTable;