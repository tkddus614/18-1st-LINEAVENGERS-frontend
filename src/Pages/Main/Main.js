import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CardList from "./CardList/CardList";
import "./Main.scss";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/Data/ProductsData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ products: data });
      });
  }

  render() {
    console.log(this.state.products);
    return (
      <div className="main">
        <Header />
        <main className="mainContainer">
          <div className="bigSlide">
            {/* <img
              className="backgroundImg"
              alt="Line Freinds Img"
              src="../Images/LineFriends.jpeg"
            /> */}
            <div className="copy">
              <p className="bigCopy">
                귀여운 조명이
                <br />
                나를 감싸네
              </p>
              <p className="smallCopy">BT21 BABY 포터블 무드 램프</p>
            </div>
          </div>
          <article className="hotCategory">
            <p className="title">카테고리 바로가기</p>
            <CardList products={this.state.products} />
          </article>
          <article className="products">
            <p className="title">마음껏 둘러보세요</p>
            <CardList products={this.state.products} />
          </article>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
