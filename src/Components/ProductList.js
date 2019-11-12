import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
//import { storeSkills } from "../data";
import {SkillsConsumer } from "../context";

export default class ProductList extends Component {
  //state = { Skills: storeSkills };
  render() {
  //  console.log(this.state.Skills);

    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="My" title="Skills" />

            <div className="row">
              <SkillsConsumer>
                  {value=>{
                 return value.skills.map(SkillX =>{
                     return <Product 
                     key ={SkillX.id} 
                     skills = {SkillX}
                     />
                 });
                  }}
              </SkillsConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
      //<Product/>
    );
  }
}
