import React, { Component } from "react";
import {storeSkills, detailSkills} from "./data";

const SkillsContext = React.createContext();
//provider^ //consumer^
class SkillsProvider extends Component {
    state = { 
        skills :[],
        detailSkills : detailSkills
    };
    componentDidMount(){
      this.setSkills();
    }
    setSkills= () => {
      let tempSkills = [];
      storeSkills.forEach(item =>{
        const singleItem = {...item};
        tempSkills = [...tempSkills, singleItem];

      })
      this.setState(() => {
        return {skills:tempSkills}
      })
    };

    getItem = (id) =>{
const skill = 
this.state.skills.find(item=> item.id === id);
return skill;
    };

    handleDetail = (id) =>{
        const skill = this.getItem(id);
        this.setState(()=> {
          return {detailSkills:skill}
        });
    };
    addToCart = (id) =>{
        console.log(`hello from add cart id: ${id}`);
    };

  render() {
    return (
      <SkillsContext.Provider value={{
          ...this.state,
          handleDetail:this.handleDetail,
          addToCart: this.addToCart
      }}>
          {this.props.children}
          </SkillsContext.Provider>
    );
  }
}

const SkillsConsumer = SkillsContext.Consumer;
export {SkillsConsumer, SkillsProvider}