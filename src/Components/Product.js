import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SkillsConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, level, inCart } = this.props.skills;
    return (
      <SkillWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <SkillsConsumer>
            {value => (
              <div>
                <div
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img
                      src={img}
                      alt="skill"
                      className="card-img-top "
                      // style={{ height: "10rem", width: "auto" }}
                    />
                  </Link>
                </div>
                {/*card footer*/}
                <div className="card-footer d-flex justify-content-between">
                  <p className="align-self-center mb-0">{title}</p>
                  <h5 className="text-blue font-italic mb-0">
                    <span className="mr-1">Level:{level}</span>
                  </h5>
                </div>
                <button
                  className="cart-btn"
                  cisabled={inCart ? true : false} // if(incart==)
                  onClick={() => {
                   value.addToCart(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      in Cart
                    </p>
                  ) : (
                    <span className="mr-2">
                      <i className="fas fa-cart-plus" /> Add to the Cart
                    </span>
                  )}
                </button>
              </div>
            )}
          </SkillsConsumer>
        </div>
      </SkillWrapper>
    );
  }
}

Product.propTypes = {
  skills: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    level: PropTypes.number,
    inCart: PropTypes.bool
  })
};

const SkillWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
  }
  .cart-btn {
    border: 0.05rem;
    background: rgb(254, 255, 99);
    background: linear-gradient(
      180deg,
      rgba(254, 255, 99, 1) 0%,
      rgba(224, 172, 0, 1) 100%
    );
    width: 100%;
    right: 100%;
    left: 100%;
    font-family: Arial, Helvetica, sans-serif !important;
    color: var(--mainBlue);
    bortder-radius: 0.5rem 0.5rem 0 0;
  }
  .cart-btn:hover {
    background: rgb(242, 213, 0);
    background: linear-gradient(
      180deg,
      rgba(242, 213, 0, 1) 0%,
      rgba(224, 138, 0, 1) 100%
    );
  }
`;
