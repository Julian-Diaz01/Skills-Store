import React, { Component } from "react";
//import styled from "styled-components";
import { Link } from "react-router-dom";
import { SkillsConsumer } from "../context";
import { ButtonContainer } from "./Button";


export default class Details extends Component {
  render() {
    return (
      <SkillsConsumer>
        {value => {
          const { id, img, info, level, title, inCart } = value.detailSkills;
          return (
            <div className="container py-5">
              {/*Title*/}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text blue my-5">
                  {/*console.log(value.detailSkills)*/}
                </div>
              </div>
              {/*End Title*/}
              {/*Skill info*/}
              <div className="row">
                <div className="col-10 mx-auto col-md-5  text-capitalized">
                  <img
                    src={img}
                    className="img-fluid"
                    alt="skill"
                    style={{marginLeft:"auto", marginRight:"auto"}}
                  />
                   <h2 className="">{title}</h2>
                </div>
                {/*skill text*/}
               
                <div className="col-10 mx-auto col-md-5  text-capitalized">
                <h1>{}</h1>
                <h2> Level: {level}</h2>
                  <h4 className="text-title text-yppercase text-muted mt-3 mb-2">
                    {info}{" "}
                  </h4>
                    {/*buttons*/}
                  <div>
                      <Link to="/">
                          <ButtonContainer>Back to Skills</ButtonContainer>
                      </Link>
                      <ButtonContainer cart
                      disabled={inCart?true:false}
                      onClick={()=>{
                          value.addToCart(id);
                      }}>
                          {inCart ? "inCart" : "add to cart"}
                      </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </SkillsConsumer>
    );
  }
}
